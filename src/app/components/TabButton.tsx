import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

type Props = {
  active: boolean;
  selectTab: () => void;
  children: string[];
};

const TabButton = ({ active, selectTab, children }: Props) => {
  const buttonClasses = active ? "text-[#ccd6f6]" : "text-[#8892b0]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-[#ccd6f6] ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
