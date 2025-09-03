import React from "react";
import { delay, motion, transform } from "framer-motion";
import coffee1 from "../../assets/coffee/coffee1.png";
// import coffee2 from "../../assets/coffee/coffee2.png";
import coffee3 from "../../assets/coffee/coffee3.png";

const servicesData = [
  {
    id: 1,
    image: coffee3,
    title: "Black Coffee",
    subtitle:
      "Bold, pure, and unapologetically strong. Your go-to for clarity and kick.",
  },
  {
    id: 2,
    image: coffee1,
    title: "Hot Coffee",
    subtitle:
      "Rich, comforting and bold. The perfect warmth to start your day or slow it down with intention.",
  },
  {
    id: 3,
    image: coffee3,
    title: "Cold Coffee",
    subtitle:
      "Chilled, smooth, and energizing. Your cool companion for warm days and focused minds.",
  },
];
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      // duration: 0.4,
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.4,
    },
  },
};

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
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-50"
        >
          Freshly brewed or perfectly chilled — every sip is crafted to delight.
          From bold coffee to smooth chocolate, taste meets style in every drop.
        </motion.p>
      </div>
      {/* card section */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {servicesData?.map((e) => (
          <motion.div variants={cardVariants} className="text-center p-4 space-y-6 mt-[30px]">
            <img
              src={e.image}
              alt={e.title}
              className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="space-y-2  md:px-4 lg:px-10">
              <h1 className=" text-xl text-primary text-bold ">{e?.title}</h1>
              <h4 className="text-[14px] text-dark-gray">{e?.subtitle}</h4>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
