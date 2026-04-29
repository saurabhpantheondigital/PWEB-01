"use client";

import React, { useState, useEffect, useRef, FC } from "react";

// --- TYPE DEFINITIONS ---

// Props for the individual counter component
interface CountingNumberProps {
  target: number;
  duration: number;
  className?: string;
  start: boolean;
}

// Shape of the data for each statistic
interface Stat {
  target: number;
  label: string;
  icon: string;
  alt: string;
}

// --- COMPONENTS ---

// The reusable Counter component in TypeScript
const CountingNumber: FC<CountingNumberProps> = ({
  target,
  duration,
  className,
  start,
}) => {
  const [count, setCount] = useState<number>(0);
  const hasAnimated = useRef<boolean>(false);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Only start the animation if the 'start' prop is true and it hasn't animated yet
    if (start && !hasAnimated.current) {
      hasAnimated.current = true; // Mark as animated

      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;

        // Calculate the progress of the animation (a value from 0 to 1)
        const progress = Math.min(1, elapsedTime / duration);

        // Calculate the current value based on the progress
        const currentValue = Math.floor(progress * target);

        setCount(currentValue);

        // If the animation is not yet complete, request the next frame
        if (progress < 1) {
          animationFrameId.current = requestAnimationFrame(animate);
        }
      };

      // Start the animation
      animationFrameId.current = requestAnimationFrame(animate);
    }

    // Cleanup function to cancel the animation frame if the component unmounts
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [start, target, duration]); // Rerun effect if these props change

  return <div className={className}>{count.toLocaleString()}+ </div>;
};

// Your updated AboutNumerics component that controls all counters
const AboutNumerics: FC = () => {
  // State to trigger the animation for all counters at once
  const [startCounting, setStartCounting] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Data for our numeric stats
  const stats: Stat[] = [
    {
      target: 98,
      label: "Happy Client",
      icon: "/favorite-chart.svg",
      alt: "Happy Clients",
    },
    {
      target: 98,
      label: "Finished Projects",
      icon: "/status-up.svg",
      alt: "Finished Projects",
    },
    {
      target: 25,
      label: "Skilled Experts",
      icon: "/personalcard.svg",
      alt: "Skilled Experts",
    },
    {
      target: 8,
      label: "Years of Experience",
      icon: "/chart-2.svg",
      alt: "Years of Experience",
    },
  ];

  // Find the largest number to determine the animation duration for all counters
  const maxTarget = Math.max(...stats.map((stat) => stat.target));
  const sharedDuration = Math.min(3000, Math.max(1500, maxTarget * 20)); // Adjusted for a smoother feel

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartCounting(true);
          // We only need to trigger it once, so we can unobserve
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the grid is visible
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center mt-12 sm:mt-24">
      <div
        ref={containerRef}
        className="grid w-[90%] md:w-[80%] place-items-center gap-4 md:gap-8 grid-cols-[2fr_1fr_2fr] md:grid-cols-7 auto-cols-fr  p-8 md:px-24 rounded-4xl bg-[#313131] shadow-[inset_-10px_10px_8px_rgba(0,0,0,.25)]"
      >
        {stats.map((stat, index) => (
          <React.Fragment key={stat.label}>
            {/* Stat Item */}
            <div
              className={`${
                index === 0 || index === 2 ? "ml-[25%] sm:ml-0" : ""
              } flex flex-col gap-2`}
            >
              <div className="flex gap-2 items-center">
                <img
                  src={stat.icon}
                  alt={stat.alt}
                  className="w-[27] h-[27] md:w-[40] md:h-[40]"
                />
                <CountingNumber
                  target={stat.target}
                  duration={sharedDuration} // All counters use the same duration
                  start={startCounting} // All counters start at the same time
                  className="font-geometric font-extrabold min-w-32 text-xl md:text-4xl text-white"
                />
              </div>
              <p className="text-white font-avenir-demi text-xs md:text-base align-top font-bold">
                {stat.label}
              </p>
            </div>

            {/* Vertical Separator */}
            {index < stats.length - 1 && (
              <div
                className={`h-full ${
                  index === 1 ? "hidden md:block" : ""
                } border-[0.5] border-[#A8A8A8] rounded-full`}
              />
            )}

            {/* Horizontal Separator for mobile */}
            {index === 1 && (
              <div className="w-full block md:hidden border-[0.5] border-[#A8A8A8] rounded-full col-span-3" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AboutNumerics;
