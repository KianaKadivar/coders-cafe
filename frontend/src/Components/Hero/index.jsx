import React, { useState } from "react";
import { motion } from "framer-motion";
import BgImage from "./../../assets/bg-slate.png";
import blackCoffee from "../../assets/black.png";
import Navbar from "../Navbar";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const bgImage = {
  width: "100vw",
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

export default function Hero() {
  const [sideBar, setSideBar] = useState(false);
  return (
    <main style={bgImage}>
      <section className="relative min-h-[750px] w-full pb-12 md:pb-0">
        <div className="container">
          <Navbar sideBar={sideBar} setSideBar={setSideBar} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px] lg:px-0 xl:px-6">
            <div className="text-light-orange mt-[100px] md:mt-0 p-4 space-y-16 md:space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight ml-14"
              >
                Blvck Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-sm sm:text-xl  md:text-2xl">
                    Black Lifestyle Lovers,
                  </h1>
                  <h1 className="text-xs  md:text-sm opacity-55 leading-loose">
                    For those who find peace in the shadows and strength in
                    simplicity. Black isn’t just a color—it’s a quiet statement,
                    a lifestyle of depth and intention. It speaks without noise,
                    moves without rush, and holds space for clarity in a chaotic
                    world.
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[180px] md:h-[215px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            <div className="relative  mt-14 sm:mt-5">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={blackCoffee}
                alt="black coffee"
                className="relative z-40 h-[400px] md:h-[500px] lg:h-[700px] img-shadow"
              />
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className=" w-[135px] h-[135px] md:w-[180px]  md:h-[180px] absolute top-6 -right-12 md:top-6 md:-right-20 lg:top-24 lg:-right-16 border-primary border-[15px] md:border-[20px] rounded-full z-10 "
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute -top-15 left-[225px] z-[1]"
              >
                <h1 className="text-[140px] scale-150 font-bold text-dark-gray/40 leading-none">
                  Blvck Tumbler
                </h1>
              </motion.div>
            </div>
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                      sleek, intentional, and made for those who sip slowly,
                      think deeply, and live in monochrome clarity.
                    </h1>
                  </div>
                  <div className="absolute -top-6 -right-10 w-[250px] h-[215px] bg-dark-gray/50"></div>
                </div>
              </motion.div>
              <div></div>
            </div>
          </div>
        </div>
        {/* side bar */}
        {sideBar && (
          <motion.div
            initial={{ opacity: 0, x: 140 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.4,
            }}
            exit={{ opacity: 0, x: 140 }}
            className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primary-dark/80 backdrop-blur-sm z-50"
          >
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                <div className="w-[1px] h-[70px] bg-white"></div>
                <div className="inline-block p-2 cursor-pointer rounded-full border border-white">
                  <FaFacebook className="text-xl" />
                </div>
                <div className="inline-block p-2 cursor-pointer rounded-full border border-white">
                  <FaTwitter className="text-xl" />
                </div>
                <div className="inline-block p-2 cursor-pointer rounded-full border border-white">
                  <FaInstagram className="text-xl" />
                </div>
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}
