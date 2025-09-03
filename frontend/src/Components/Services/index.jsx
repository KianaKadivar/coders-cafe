import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="container my-16 space-y-4">
      {/* header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-light-gray"
        >
          Fresh and
          <span className="text-primary"> Tasty</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: .5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: .6,
          }}
          className="text-sm opacity-50"
        >
          Freshly brewed or perfectly chilled — every sip is crafted to delight.
          From bold coffee to smooth chocolate, taste meets style in every drop.
        </motion.p>
      </div>
    </div>
  );
}
