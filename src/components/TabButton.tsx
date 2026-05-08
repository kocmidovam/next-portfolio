import React from "react"
import { motion } from "framer-motion"
import type { TabButtonProps } from "@/types"

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
}

const TabButton = ({ active, selectTab, children }: TabButtonProps): React.ReactNode => {
  const buttonClasses = active ? "text-subtle-light" : "text-subtle"

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-subtle-light ${buttonClasses}`}>{children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className='h-1 bg-brand mt-2 mr-3'></motion.div>
    </button>
  )
}

export default TabButton
