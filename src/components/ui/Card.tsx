import Image from "next/image";
import Link from "next/link";

const Card = ({
  imgHref,
  title,
  description,
  ckey,
  type = "normal",
  href,
}: {
  ckey: string | number;
  imgHref: string;
  title: string;
  description: string;
  type?: "square" | "normal";
  href: string;
}) => {
  return (
    <div
      key={ckey}
      className={`relative  bg-white 
        rounded-2xl group p-4 ${
          type === "square"
            ? "w-[100%] md:min-h-[300px] h-auto"
            : "md:w-[37vw] md:min-h-[240] w-[90vw]"
        }`}
    >
      <Image
        src={imgHref}
        alt="card image"
        width="0"
        height="0"
        className={type !== "square" ? "w-[9%] h-auto" : "w-[10%] h-auto"}
      />
      <h1 className="text-sm md:text-base font-avenir-bold mt-3 font-bold">
        {title}
      </h1>
      <p
        className={`text-xs md:text-sm font-avenir-medium leading-6  mt-3 ${
          type === "square" && "mt-4"
        }`}
      >
        {description}
      </p>

      {type === "normal" && (
        <div className="w-full flex items-center mt-10  justify-end">
          <Image
            src="/microscope.svg"
            alt="microscope image"
            width="0"
            height="0"
            className={`md:opacity-100 opacity-0 w-[7%] h-[7%] translate-x-20 ${
              type === "normal" &&
              "group-hover:translate-x-0  group-hover:rotate-30"
            } duration-300`}
          />
          <Image
            src="/microscope-down.svg"
            alt="microscope image"
            width="0"
            height="0"
            className="block md:hidden w-[6%] h-[6%]"
          />

          <Link href={href} aria-label={title}>
            <h4
              className={`${
                type === "normal" && "group-hover:opacity-100 whitespace-nowrap"
              } ml-2 font-avenir-demi text-xs md:text-base md:opacity-0 font-medium hover:underline underline-offset-4 duration-300`}
            >
              Read More
              <span className="hidden absolute whitespace-nowrap">
                about ${title}
              </span>
            </h4>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
