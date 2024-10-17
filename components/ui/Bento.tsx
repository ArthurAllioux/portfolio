"use client"
import SkillList from "@/app/presentation/SkillList"
import { cn } from "@/lib/utils"
import { HTMLMotionProps, motion, useInView } from "framer-motion"
import { ReactNode, useRef } from "react"

export const BentoGrid = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })
  return (
    <div className="rounded-xl">
      <motion.div
        ref={ref}
        initial="initial"
        animate={isInView && "animate"}
        transition={{
          staggerChildren: 0.2,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        {children}
      </motion.div>
    </div>
  )
}

export const Block = ({ className, ...props }: HTMLMotionProps<"div">) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0,
          opacity: 0,
        },
        animate: {
          scale: 1,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 1,
        stiffness: 500,
        damping: 60,
      }}
      className={cn(
        "col-span-4 overflow-hidden rounded-xl bg-gradient-to-tr from-white/20 to-white/60 p-6 shadow-md",
        className,
      )}
      {...props}
    />
  )
}

export const HeaderBlock = ({
  title,
  subtitle,
  description,
  stack,
  className,
}: {
  title: string
  subtitle?: string
  description: string
  stack: string[]
  className?: string
}) => (
  <Block
    className={cn(
      "col-span-12 row-span-2 flex flex-col justify-between gap-2 xl:col-span-6",
      className,
    )}
  >
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <h3 className="font-medium text-secondary">{subtitle}</h3>
    </div>
    <p className="text-pretty pb-2 text-sm leading-relaxed tracking-wide">
      {description}
    </p>
    <SkillList skillList={stack} theme="light" variant="small" />
  </Block>
)

export const ImageBlock = ({ className, ...props }: HTMLMotionProps<"div">) => (
  <Block
    whileHover={{
      rotate: "2.5deg",
      scale: 1.1,
    }}
    className={cn(
      "col-span-6 flex items-center justify-center bg-transparent p-0",
      className,
    )}
    {...props}
  >
    {props.children}
  </Block>
)

export const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p></p>
  </Block>
)

export const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3"></Block>
)

export const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9"></Block>
)
