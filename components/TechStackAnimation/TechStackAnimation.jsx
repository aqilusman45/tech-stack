import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import styles from "./techStackAnimation.module.scss";
import icon from "../../icons/tick-icon.svg";
export const TechStackAnimation = ({ otherClasses }) => {
  const techStackAnimationClasses = clsx(
    otherClasses,
    " max-w-[1512px] mx-auto px-4  lg:px-[108px] w-full "
  );

  const mockData = [
    {
      number: 1,
      title: "Sources of Traffic",
      points: [
        {
          title: "Phone/Tablet",
        },
        {
          title: "IoT",
        },
        {
          title: "Open APIs",
        },
        {
          title: "Gaming Consoles",
        },
        {
          title: "Headless Browsers",
        },
      ],
    },
    {
      number: 2,
      title: "NETACEA",
      points: [
        {
          icon: "../../icons/tick-icon.svg",
          title: "Threats Intelligence & Data Science",
        },
        {
          icon: "../../icons/tick-icon.svg",
          title: "Intent Analytics",
        },
        {
          icon: "../../icons/tick-icon.svg",
          title: "Real-Time Active Attack Data",
        },
      ],
    },
    {
      number: 3,
      title: "Protect All Threat Surfaces",
      points: [
        {
          title: "Websites",
        },
        {
          title: "APIs",
        },
        {
          title: "Applications",
        },
      ],
    },
    {
      number: 4,
      title: "Surfaces Web Technology And Users",
      points: [
        {
          title: "Intellect Property",
        },
        {
          title: "Users data",
        },
        {
          title: "Uptime",
        },
        {
          title: "Transactions",
        },
      ],
    },
  ];

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.refresh();

  if (isMounted) {
    gsap.utils.toArray(".sources-of-traffic").forEach((elem, i) => {
      const smallTimeline = gsap.timeline();

      ScrollTrigger.create({
        trigger: elem,
        start: "top 30%",
        end: "bottom 30%",
        animation: smallTimeline,
        markers: true,
        toggleActions: 'play reverse play reverse',

        onEnter: () => {
          document
            .querySelector("#details-container" + i)
            ?.classList.add(`${styles.techStachGreenBackround}`)
        },
        onEnterBack: () => {
          document
          .querySelector("#details-container" + i)
          ?.classList.add(`${styles.techStachGreenBackround}`)
        },
        onLeave: () => {
          document
          .querySelector("#details-container" + i)
          ?.classList.remove(`${styles.techStachGreenBackround}`)
          console.log("onLeave");
        },
        onLeaveBack: () => {
          document
          .querySelector("#details-container" + i)
          ?.classList.remove(`${styles.techStachGreenBackround}`)
          console.log("onLeaveBack");
        },
      });
    });
  }

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
              {/* <div className="sources-of-traffic flex flex-col gap-4">
                <div className="flex gap-8" id="number-container">
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
                      IoT
                    </p>
                  </div>
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
                      Open APIs
                    </p>
                  </div>
                </div>
              </div> */}

              {mockData?.map((node, i) => {
                return (
                  <div className="sources-of-traffic flex flex-col gap-4" id={`details-container${i}`}>
                    <div className="flex items-center gap-8 numbers-container">
                      <p className="rounded-[4px] border-[1px] w-fit px-4 py-2 border-[#216EF2] text-[#216EF2] text-[20px] leading-[28px] font-normal">
                        {node?.number}
                      </p>
                      <h2 className="text-black font-medium leading-[28px] text-2xl">
                        {node?.title}
                      </h2>
                    </div>
                    {node?.points?.map((point) => {
                      return (
                        <div className="point-container flex flex-col gap-2">
                          <div className="flex gap-2 items-center pl-20">
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
                              {point?.title}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackAnimation;
