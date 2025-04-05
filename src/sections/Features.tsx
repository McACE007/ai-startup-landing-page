"use client";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import Image from "next/image";
import productImage from "@/assets/product-image.png";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

import React, { useEffect, useRef, useState } from "react";
import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
  ValueAnimationTransition,
} from "framer-motion";

type FeatureTabPropsType = {
  tab: (typeof tabs)[number];
  onClick: () => void;
  isSelected: boolean;
};

function FeatureTab({ tab, onClick, isSelected }: FeatureTabPropsType) {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  function handleTabHover() {
    if (dotLottieRef.current === null) return;
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  }

  useEffect(() => {
    if (!tabRef.current || !isSelected) return;
    xPercentage.set(0);
    yPercentage.set(0);
    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    animate(xPercentage, [0, 100, 100, 0, 0], {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
      times,
    });

    animate(yPercentage, [0, 0, 100, 100, 0], {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
      times,
    });
  }, [isSelected, xPercentage, yPercentage]);

  return (
    <div
      onClick={onClick}
      ref={tabRef}
      onMouseEnter={handleTabHover}
      className="flex gap-2.5 rounded-xl border border-white/15 p-2.5 items-center lg:flex-1 relative"
    >
      {isSelected && (
        <motion.div
          style={{ maskImage: maskImage }}
          className="absolute inset-0 border border-[#a369ff] rounded-xl -m-px"
        ></motion.div>
      )}
      <div className="size-12 border border-white/15 inline-flex justify-center items-center rounded-xl">
        <DotLottiePlayer
          src={tab.icon}
          className="size-5"
          ref={dotLottieRef}
          autoplay
        />
      </div>
      <div className="font-medium tracking-tighter">{tab.title}</div>
      {tab.isNew && (
        <div className="bg-[#8C44FF] text-black rounded-full px-2 py-0.5 text-xs font-semibold">
          new
        </div>
      )}
    </div>
  );
}

const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  function handleSelectTab(index: number) {
    setSelectedTab(index);

    const animateOptions: ValueAnimationTransition = {
      ease: "easeInOut",
      duration: 2,
    };

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      animateOptions,
    );

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), 100, tabs[index].backgroundPositionX],
      animateOptions,
    );

    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), 100, tabs[index].backgroundPositionY],
      animateOptions,
    );
  }

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="section-title">Elevate your SEO efforts.</h2>
        <p className="section-description mt-5 max-w-2xl mx-auto">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>

        <div className="flex flex-col lg:flex-row gap-3 mt-10">
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              tab={tab}
              onClick={() => handleSelectTab(tabIndex)}
              isSelected={selectedTab === tabIndex}
              key={tab.title}
            />
          ))}
        </div>
        <div className="mt-3 border border-white/20 rounded-xl p-2.5">
          <motion.div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundImage: `url(${productImage.src})`,
              backgroundPosition,
              backgroundSize,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
