import Image from "next/image";

function ChooseUs() {
  return (
    <div className="md:w-[80%] w-[70%] mt-12 md:mt-24">
      <h4 className="font-avenir-medium text-sm md:text-xl opacity-60 text-white text-center">
        Reason to choose us
      </h4>
      <h1 className="font-geometric font-bold text-xl md:text-4xl text-white text-center mt-4">
        We Provide Truly Prominent Software Solutions
      </h1>
      {/* cards for reason to choose us */}
      <div className=" w-full h-auto grid md:auto-cols-fr md:grid-flow-col gap-10 mt-12">
        {/* 1 card */}
        <div className="h-[468] border-1 rounded-2xl overflow-clip group">
          <h1 className="font-geometric font-bold z-10 relative text-base md:text-3xl text-white m-4">
            Passionate <br /> Craftsmanship
          </h1>
          <Image
            className="pb-24 cover group-hover:scale-110 duration-300 -z-10"
            src="/ChooseUs1.png"
            alt="first choose us image"
            width="700"
            height="400"
          />
        </div>
        {/* 2 card */}
        <div className="h-[468] border-1 rounded-2xl overflow-clip md:translate-y-0 -translate-y-100 z-1 bg-black group">
          <h1 className="font-geometric font-bold z-10 relative text-base md:text-3xl text-white m-4">
            Innovative <br /> Vision
          </h1>
          <Image
            className="pb-24 group-hover:scale-110 duration-300 -z-10"
            src="/ChooseUs2.png"
            alt="second choose us image"
            width="700"
            height="400"
          />
        </div>
        {/* 3 card */}
        <div className="md:h-[468] h-[400] border-1 rounded-2xl overflow-clip  md:translate-y-0  -translate-y-200 z-2 bg-black group">
          <h1 className="font-geometric font-bold z-10 relative text-base md:text-3xl text-white m-4">
            Client-Centric <br /> Approach
          </h1>
          <Image
            className="md:pb-24 group-hover:scale-110 duration-300 -z-10"
            src="/ChooseUs3.png"
            alt="third choose us image"
            width="700"
            height="400"
          />
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
