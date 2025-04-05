"use client";
import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import echoLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import quantumLogo from "@/assets/logo-quantum.png";
import Image from "next/image";
import { motion } from "framer-motion";

function LogoTicker() {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>

          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] flex-1">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{
                translateX: "0%",
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              }}
              className="flex gap-14 flex-none pr-14"
            >
              <Image
                src={acmeLogo}
                alt="Acme Logo"
                className="logo-ticker-image"
              />
              <Image
                src={apexLogo}
                alt="Apex Logo"
                className="logo-ticker-image"
              />

              <Image
                src={celestialLogo}
                alt="Celestial Logo"
                className="logo-ticker-image"
              />
              <Image
                src={echoLogo}
                alt="Echo Logo"
                className="logo-ticker-image"
              />
              <Image
                src={pulseLogo}
                alt="Pulse Logo"
                className="logo-ticker-image"
              />
              <Image
                src={quantumLogo}
                alt="Quantum Logo"
                className="logo-ticker-image"
              />

              <Image
                src={acmeLogo}
                alt="Acme Logo"
                className="logo-ticker-image"
              />
              <Image
                src={apexLogo}
                alt="Apex Logo"
                className="logo-ticker-image"
              />
              <Image
                src={celestialLogo}
                alt="Celestial Logo"
                className="logo-ticker-image"
              />
              <Image
                src={echoLogo}
                alt="Echo Logo"
                className="logo-ticker-image"
              />
              <Image
                src={pulseLogo}
                alt="Pulse Logo"
                className="logo-ticker-image"
              />
              <Image
                src={quantumLogo}
                alt="Quantum Logo"
                className="logo-ticker-image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoTicker;
