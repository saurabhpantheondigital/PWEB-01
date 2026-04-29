import Image from "next/image";

function Process({
  heading,
  process,
}: {
  heading: string;
  process: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
}) {
  return (
    <>
      <h1 className="w-[90%] md:w-[80%] text-center mt-12 md:mt-24 text-xl md:text-4xl font-geometric text-white font-bold">
        {heading}
      </h1>
      {process?.length > 0 &&
        process?.map((item, idx) => (
          <div
            key={idx}
            className={`w-[90%] md:w-[80%] h-auto min-h-[300] md:min-h-[480px] mt-6 md:mt-12 flex flex-col ${
              idx % 2 !== 0 ? "sm:flex-row-reverse" : "sm:flex-row"
            } justify-center py-8 px-4 md:py-16 md:px-8 bg-[#202020] rounded-3xl gap-4 md:gap-8`}
          >
            {/* title and description */}
            <div className="w-full md:w-[60%]">
              <h1 className="text-center md:text-left font-geometric font-bold text-md md:text-2xl text-white ">
                {item.title}
              </h1>
              <p className="font-avenir-medium mt-4 md:mt-8 leading-6 sm:leading-8 text-white text-xs md:text-base">
                {item.description}
              </p>
            </div>

            {/* image */}
            <div className="w-full md:w-[40%] h-auto max-h-[390]">
              <Image
                src={item.image}
                alt={item.title + "image"}
                width={390}
                height={390}
                className=" object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
    </>
  );
}

export default Process;
