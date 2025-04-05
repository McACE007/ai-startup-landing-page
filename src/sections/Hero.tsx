"use client";
import Button from "@/components/Button";
import starBg from "@/assets/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [300, -300],
  );

  return (
    <motion.section
      ref={sectionRef}
      animate={{
        backgroundPositionX: starBg.width,
      }}
      transition={{
        repeat: Infinity,
        duration: 120,
        ease: "linear",
      }}
      className="h-[492px] md:h-[800px] relative flex items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starBg.src})`,
        backgroundPositionY,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      <div className="absolute size-64 md:size-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0px_0px_50px_rgb(140,69,255)]"></div>

      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 60,
          ease: "linear",
        }}
        className="absolute size-[344px] md:size-[580px] rounded-full border opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 rounded-full bg-white left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 rounded-full bg-white left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 rounded-full border border-white top-1/2 left-full -translate-x-1/2 -translate-y-1/2 inline-flex justify-center items-center">
          <div className="h-2 w-2 rounded-full bg-white"></div>
        </div>
      </motion.div>

      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 120,
          ease: "linear",
        }}
        className="absolute size-[444px] md:size-[780px] border border-white/20 border-dashed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      ></motion.div>

      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 150,
          ease: "linear",
        }}
        className="absolute size-[544px] md:size-[980px] rounded-full border opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 rounded-full bg-white left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 rounded-full bg-white top-1/2 left-full -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

      <div className="container relative mt-16">
        <h1 className="text-8xl md:text-[168px] md:leading-none tracking-tighter font-semibold bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          AI SEO
        </h1>
        <p className="text-lg tracking-tight text-white/70 text-center mt-5 md:text-xl md:max-w-xl md:mx-auto">
          Elevate your site's visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="mt-5 flex justify-center">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
