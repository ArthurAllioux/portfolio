// Core component that receives mouse positions and renders pointer and content
"use client"
import React, { useEffect, useState } from "react"

import {
  motion,
  AnimatePresence,
  useMotionValue,
  MotionValue,
} from "framer-motion"
import { cn } from "@/lib/utils"

export const FollowerPointerCard = ({
  children,
  className,
  customCursor,
}: {
  children: React.ReactNode
  customCursor: React.ReactNode
  className?: string
}) => {
  const x = useMotionValue(100)
  const y = useMotionValue(100)
  const ref = React.useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<DOMRect | null>(null)
  const [startingScrollX, setstartingScrollX] = useState<number>(0)
  const [startingScrollY, setstartingScrollY] = useState<number>(0)
  const [isInside, setIsInside] = useState<boolean>(false) // Add this line

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect())
      setstartingScrollX(window.scrollX)
      setstartingScrollY(window.scrollY)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect && isInside) {
      const scrollX = window.scrollX
      const scrollY = window.scrollY
      const left = rect.left + startingScrollX
      const top = rect.top + startingScrollY
      x.set(e.clientX - left + scrollX)
      y.set(e.clientY - top + scrollY)
    }
  }
  const handleMouseLeave = () => {
    setIsInside(false)
  }

  const handleMouseEnter = () => {
    setIsInside(true)
  }
  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{ cursor: "none" }}
      ref={ref}
      className={cn("relative", className)}
    >
      <AnimatePresence>
        {isInside && <FollowPointer x={x} y={y} customCursor={customCursor} />}
      </AnimatePresence>
      {children}
    </div>
  )
}

export const FollowPointer = ({
  x,
  y,
  customCursor,
}: {
  x: MotionValue<number>
  y: MotionValue<number>
  customCursor: React.ReactNode
}) => {
  return (
    <motion.div
      className="absolute z-50 h-4 w-4 rounded-full"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{
        scale: 0,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      {customCursor}
    </motion.div>
  )
}
