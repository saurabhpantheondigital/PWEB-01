import Image from "next/image";

const Why = ({
  title,
  points,
  image,
}: {
  title: string;
  points: { id: number; point: string; icon: string }[];
  image: string;
}) => {
  return (
    <div className="w-[90%] overflow-hidden sm:w-[80%] flex sm:flex-row flex-col justify-between bg-[#1E1E1E] rounded-4xl sm:mt-48 mt-8">
      {/* left side */}
      <div className="flex flex-col justify-center mx-auto sm:pt-0 pt-8">
        <h1 className="text-white font-geometric font-bold text-xl sm:text-3xl">
          {title}
        </h1>

        <ul className="">
          {points?.length > 0 &&
            points?.map((item) => (
              <li
                key={item.id}
                className={`flex mt-4 gap-2 ${
                  item.id === 1 ? "sm:mt-16" : "sm:mt-8"
                }
                
                ${item.id === points?.length && "sm:mb-8"} `}
              >
                <Image src={item.icon} alt="" width="20" height="20" />
                <h4 className="text-white font-avenir-demi text-sm sm:text-xl">
                  {item.point}
                </h4>
              </li>
            ))}
        </ul>
      </div>

      {/* right side */}
      <Image
        src={image}
        alt=""
        width="486"
        height="629"
        className="sm:w-[45%] w-full sm:mt-0 mt-8  object-cover rounded-4xl"
      />
    </div>
  );
};

export default Why;
