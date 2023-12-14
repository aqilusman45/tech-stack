import React from "react";
import clsx from "clsx";
import Image from "next/image";

export const TechStackAnimation = ({ otherClasses }) => {
  const techStackAnimationClasses = clsx(
    otherClasses,
    " max-w-[1512px] mx-auto px-4  lg:px-[108px] w-full "
  );

  return (
    <div
      className={techStackAnimationClasses}
      data-testid="tech-stack-animation"
    >
      <div className="relative">
        <Image
          src="/images/background-pattern.svg"
          alt="background-pattern"
          width={526}
          className="w-full h-full absolute top-0 left-0 object-cover"
          height={470}
        />

        <div className="relative w-full flex flex-col gap-10 lg:gap-[130px] pt-10 lg:pt-20 px-4 lg:px-[64px] pb-10 items-center">
          <h1 className="text-black font-medium text-3xl lg:text-[40px] leading-[40px] lg:leading-[53px]">
            Our tech stack
          </h1>
          <div className="w-full flex gap-10 lg:gap-[120px] xl:gap-[134px] ">
            <div className="flex-1 w-full h-full">
              <Image
                src="/images/tech-stack.svg"
                alt="tech stack"
                className=""
                width={526}
                height={470}
              />
            </div>
            <div className="flex-1 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <div className="flex gap-8">
                  <p className="rounded-[4px] border-[1px] w-fit px-2 border-[#216EF2] text-[#216EF2] text-[20px] leading-[28px] font-normal">
                    1
                  </p>
                  <h2 className="text-black font-medium leading-[28px] text-2xl">
                    Sources of traffic
                  </h2>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center ">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9C1 11.1217 1.84285 13.1566 3.34315 14.6569C4.84344 16.1571 6.87827 17 9 17C11.1217 17 13.1566 16.1571 14.6569 14.6569C16.1571 13.1566 17 11.1217 17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9Z"
                        stroke="#216EF2"
                      />
                      <path
                        d="M5.8335 9.5L8.16683 11.5L12.1668 6.5"
                        stroke="#216EF2"
                      />
                    </svg>

                    <p className="text-lg leading-6 font-medium text-black ">
                      Phone/Tablet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackAnimation;
