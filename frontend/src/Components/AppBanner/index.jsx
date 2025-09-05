import React from "react";
import BannerImg from "../../assets/coffee-cover.jpg";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import { motion, scale } from "framer-motion";

const BannerStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

export default function AppBanner() {
  return (
    <div className="container my-14">
      <div
        style={BannerStyle}
        className="min-h-[450px] flex justify-center sm:justify-end items-center rounded-xl"
      >
        <div>
          <div className="space-y-6 max-w-xl text-center mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="text-2xl sm:text-4xl font-semibold"
            >
              Download the app
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.3,
              }}
              className="text-xs sm:text-sm sm:px-20"
            >
              Seamless shopping, instant access, and your favorite products
              always just a tap away.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.3,
              }}
              className="flex justify-center items-center gap-4"
            >
              <a
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <motion.img
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                  }}
                  src={AppStoreImg}
                  alt=""
                />
              </a>
              <a
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <motion.img
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.5,
                  }}
                  src={PlayStoreImg}
                  alt=""
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
