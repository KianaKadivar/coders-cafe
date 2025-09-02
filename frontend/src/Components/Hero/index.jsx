import React from "react";
import { motion } from "framer-motion";
import BgImage from "./../../assets/bg-slate.png";
import blackCoffee from "../../assets/black.png";
import Navbar from "../Navbar";

const bgImage = {
  width: "100vw",
  height: "105vh",
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

export default function Hero() {
  return (
    <main style={bgImage}>
      <section className="h-[100%] w-full">
        <div className="container">
          <Navbar />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[100%] lg:px-0 xl:px-6">
            <div className="text-light-orange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Blvck Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lifestyle Lovers,</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    For those who find peace in the shadows and strength in
                    simplicity. Black isn’t just a color—it’s a quiet statement,
                    a lifestyle of depth and intention. It speaks without noise,
                    moves without rush, and holds space for clarity in a chaotic
                    world.
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[215px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            <div className="relative mt-5">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={blackCoffee}
                alt="black coffee"
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="w-[180px] h-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10 "
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: .8,
                }}
                className="absolute -top-15 left-[225px] z-[1]"
              >
                <h1 className="text-[140px] scale-150 font-bold text-dark-gray/40 leading-none">
                  Blvck Tumbler
                </h1>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className="text-light-orange mt-[100px] md:mt-0 p-4 space-y-28"
            >
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Blvck Tumbler
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">The Design,</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Inspired by café rituals and digital calm. The design is
                    sleek, intentional, and made for those who sip slowly, think
                    deeply, and live in monochrome clarity.
                  </h1>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[215px] bg-dark-gray/50"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
