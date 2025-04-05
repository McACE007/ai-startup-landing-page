"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="section-title">Beyond Expectations.</h2>
        <p className="section-description mt-5 max-w-md mx-auto">
          Our revolutionary AI SEO tools have transformed our clients&apos;
          strategies.
        </p>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] mt-10">
          <motion.div
            className="flex gap-5 flex-none pr-5"
            initial={{
              translateX: "-50%",
            }}
            animate={{
              translateX: "0%",
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map(
              ({ text, name, title, avatarImg }) => (
                <div
                  className="bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] p-6 md:p-10 border border-white/15 rounded-xl max-w-xs md:max-w-md flex-none"
                  key={name}
                >
                  <div className="text-lg md:text-2xl tracking-tight">
                    {text}
                  </div>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="relative after:absolute after:content-[''] after:inset-0 after:bg-[#8C45FF] after:mix-blend-soft-light after:rounded-lg before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:rounded-lg before:z-10">
                      <Image
                        src={avatarImg}
                        alt={name}
                        className="rounded-lg size-11 grayscale"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="tracking-tight">{name}</div>
                      <div className="tracking-tight text-sm text-white/50">
                        {title}
                      </div>
                    </div>
                  </div>
                </div>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
