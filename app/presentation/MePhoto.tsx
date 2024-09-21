"use client"
import Image from "next/image"
import me from "@/assets/me.png"
import wavingHand from "@/assets/waving-hand-left.png"
import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import { HTMLAttributes, useState } from "react"
import React from "react"

interface MePhotoProps extends HTMLAttributes<HTMLDivElement> {}

export default function MePhoto(props: MePhotoProps) {
  const [sayHi, setSayHi] = useState(false)

  const handVariants: Variants = {
    hidden: { rotate: 0 },
    wave: {
      rotate: [0, 20, -20, 20, -20, 0], // Hand waving motion
      transition: {
        duration: 1,
        repeat: 2,
      },
    },
  }

  const startSayHi = () => {
    console.log("Salut toi :)")
    setSayHi(true)
  }
  const endSayHi = () => {
    setSayHi(false)
  }

  return (
    <div className={cn("relative lg:-m-8", props.className)}>
      <div className="overflow-hidden p-8">
        <div
          onClick={startSayHi}
          className="overflow-top relative z-0 size-56 cursor-pointer bg-gradient-to-t from-secondary to-primary transition-all md:size-80"
        >
          <Image
            src={me}
            alt="me"
            className="absolute bottom-0 size-72 object-cover contrast-150 transition-all hover:scale-105 md:size-96"
          />
        </div>
      </div>
      <div
        className={cn(
          "absolute right-1 top-0 translate-y-10 cursor-pointer opacity-0 transition-all",
          sayHi && "translate-y-0 opacity-100",
        )}
        onClick={startSayHi}
      >
        <motion.span
          variants={handVariants}
          initial="hidden"
          animate={sayHi ? "wave" : "hidden"}
          className="inline-block size-16 md:size-24"
          onAnimationComplete={endSayHi}
        >
          <Image src={wavingHand} alt="Salut!" />
        </motion.span>
      </div>
    </div>
  )
}
