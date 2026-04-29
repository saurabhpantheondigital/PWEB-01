"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

import { useState } from "react";

export const HoverEffect = ({
  type,
  items,
  className,
}: {
  type?: "dark";
  items: {
    id: number;
    icon: string;
    title: string;
    description: string;
    // link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:py-12",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute -inset-2 h-[105%] w-[105%] bg-[#636363] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card type={type}>
            <Image
              src={item.icon}
              alt="icon"
              width="0"
              height="0"
              className="w-[13%] h-auto"
            />
            <CardTitle
              className={type === "dark" ? "text-white" : "text-black"}
            >
              {item.title}
            </CardTitle>
            <CardDescription
              className={type === "dark" ? "text-white" : "text-black"}
            >
              {item.description}
            </CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  type,
  className,
  children,
}: {
  type?: "dark";
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={
        type === "dark"
          ? cn(
              "rounded-2xl max-w-[320] min-h-[283] h-full w-full p-4 overflow-hidden  bg-black border-2 border-[#636363] dark:border-white/[0.2] group-hover:border-black relative z-20"
            )
          : cn(
              "rounded-2xl max-w-[320] min-h-[283] h-full w-full p-4 overflow-hidden  bg-white border border-transparent dark:border-white/[0.2] group-hover:border-white relative z-20",
              className
            )
      }
    >
      <div className="relative z-50">
        <div className="p-4 ">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-black font-avenir-bold font-bold text-base tracking-wide mt-4",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-6 text-black font-avenir-medium tracking-wide leading-7 text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
