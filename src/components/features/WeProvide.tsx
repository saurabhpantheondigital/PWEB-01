import Card from "../ui/Card";
import { HoverEffect } from "../ui/card-hover-effect";

const WeProvide = ({
  title,
  subtitle,
  cardsData,
}: {
  title: string;
  subtitle: string;
  cardsData: { id: number; icon: string; title: string; description: string }[];
}) => {
  return (
    <div
      key={title}
      className="w-[90%] md:w-[80%] mt-12 sm:mt-24 pb-6 flex flex-col items-center justify-center"
    >
      <h4 className="text-white font-avenir-medium opacity-60 text-sm md:text-xl ">
        {subtitle}
      </h4>
      <h1 className="text-white font-geometric font-bold text-xl md:text-3xl text-center mb-6 sm:mb-0 sm:mt-4 ">
        {title}
      </h1>

      <HoverEffect items={cardsData} />
    </div>
  );
};

export default WeProvide;
