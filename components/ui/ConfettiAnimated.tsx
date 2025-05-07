import { cn } from "@/lib/utils"
import { motion, Variants } from "framer-motion"

export default function ConfettiAnimated({
  direction = "left",
  animate = false,
  className,
  confettiClassName,
}: {
  direction?: "left" | "right"
  className?: string
  confettiClassName?: string
  animate?: boolean
}) {
  const rotations = direction === "left" ? [12, 0, -12] : [-12, 0, 12]
  const slide = direction === "left" ? -50 : 50
  const sizes = ["w-4", "w-6", "w-4"]
  const variants: Variants = {
    initial: {
      opacity: 0,
      x: slide,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  }
  return (
    <motion.div
      initial="initial"
      animate={animate ? "animate" : "initial"}
      variants={variants}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 12,
        staggerChildren: 0.1,
      }}
      className={cn(
        "flex h-full flex-col justify-between gap-2",
        direction === "left" ? "items-end" : "items-start",
        className,
      )}
    >
      {rotations.map((deg, i) => (
        <motion.span
          key={i}
          variants={variants}
          style={{
            rotate: deg,
          }}
          className={cn(`h-[2px] ${sizes[i]} `, confettiClassName)}
        />
      ))}
    </motion.div>
  )
}
