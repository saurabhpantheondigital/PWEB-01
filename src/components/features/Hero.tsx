import Image from "next/image";
import PrimaryButton from "../ui/PrimaryButton";
import { ContainerScroll } from "../ui/container-scroll-animation";

const Hero = ({
  title,
  subTitle,
  description,
  buttonTitle,
  imageSrc,
  imageStyle,
  scrollAnimation,
}: {
  title: string;
  subTitle?: string;
  description: string;
  buttonTitle: string;
  imageSrc: string;
  imageStyle: string;
  scrollAnimation?: boolean;
}) => {
  return (
    <>
      {!scrollAnimation && (
        <div className="w-[90%] md:w-[80%] sm:h-[70vh] flex mx-auto mt-6 sm:mt-0 ">
          <Image
            loading="lazy"
            src={imageSrc}
            alt="Home Page Background Banner"
            width="600"
            height="500"
            className={`blur-xs mask-x-from-80% mask-x-to-100% mask-y-from-80% mask-y-to-100% md:blur-none absolute top-[2%] right-0  object-cover -z-10  ${
              imageStyle ? imageStyle : "w-full h-full"
            }`}
          />
          <div className="lg:w-[50%] w-[90%] mx-auto md:mx-0 md:mt-24 lg:mt-0">
            <h1 className="text-white font-geometric font-bold text-xl sm:text-4xl  text-center lg:text-left ">
              {title}
            </h1>
            <p className="text-white font-avenir-medium  mt-8 sm:text-base text-sm lg:text-base leading-7 text-center lg:text-left">
              {subTitle}
            </p>
            <p className="text-white font-avenir-regular  mt-8 sm:text-base text-xs leading-7 text-center lg:text-left">
              {description}
            </p>
            <div className="w-full lg:w-[40%] flex justify-center">
              <PrimaryButton
                href="/Contact_Us"
                label={buttonTitle}
                type="variant2"
                className={`mt-[20%] justify-self-center lg:justify-self-auto`}
              />
            </div>
          </div>
        </div>
      )}

      {scrollAnimation && (
        <div className="w-[90%] md:w-[80%] h-[70vh] sm:h-[105vh] flex mx-auto">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-white font-geometric font-bold text-xl sm:text-4xl  text-center">
                  {title}
                </h1>
                <p className="text-white font-avenir-regular font-regular mt-8 text-base sm:text-sm lg:text-base leading-6 text-center ">
                  {subTitle}
                </p>
                <p className="text-white sm:mb-24 mb-6  font-avenir-regular font-regular mt-8 text-base sm:text-sm leading-6 text-center ">
                  {description}
                </p>
              </>
            }
          >
            <img
              src={`/CrmHeroBannerImage.svg`}
              alt="hero"
              height={"0"}
              width={"0"}
              className="w-full mx-auto rounded-2xl object-contain h-full "
              draggable={false}
            />
          </ContainerScroll>
        </div>
      )}
    </>
  );
};

export default Hero;
