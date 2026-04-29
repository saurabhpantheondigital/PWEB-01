import Image from "next/image";

const Clients = () => {
  return (
    <div className="w-[90%] md:w-[80%] grid grid-cols-3 md:grid-cols-5 gap-8 place-items-center mt-12 md:mt-24">
      {imgs.map((item: string) => (
        <Image
          key={item}
          src={item}
          alt="clients image"
          width="127"
          height="50"
          className="flex justify-center items-center w-auto h-auto"
        />
      ))}
    </div>
  );
};

export default Clients;

const imgs = [
  "/clients1.svg",
  "/clients2.svg",
  "/clients3.svg",
  "/clients4.svg",
  "/clients5.svg",
  "/clients6.svg",
  "/clients7.svg",
  "/clients8.svg",
  "/clients9.svg",
];
