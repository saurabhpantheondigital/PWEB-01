import PrimaryButton from "../ui/PrimaryButton";

const GetInTouch = () => {
  return (
    <div className="w-[90%] sm:w-[80%] bg-[#212121] p-8 sm:p-24 mt-12 sm:mt-24 rounded-3xl flex flex-col items-center">
      <h1 className="text-white font-avenir-demi text-xl sm:text-5xl text-center mt-4 sm:mt-12">
        Ready to bring your project to life with a touch of creative magic?
      </h1>

      <p className="text-white font-avenir-medium text-sm sm:text-2xl mt-4 sm:mt-8 text-center sm:w-[60%] w-full ">
        Let’s connect and bring bold ideas to life✨! I’m available for
        full-time or part-time opportunities where design meets purpose and
        passion.
      </p>

      <PrimaryButton
        href="/Contact_Us"
        label={"Get In Touch"}
        className="mt-12 rounded-lg"
      />
    </div>
  );
};

export default GetInTouch;
