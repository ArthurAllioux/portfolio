import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"
interface BlobShapeProps extends HTMLAttributes<HTMLDivElement> {}

export default function BlobShape(props: BlobShapeProps) {
  return (
    <div className={cn("animate-blob rounded-full", props.className)}>
      {props.children}
    </div>
  )
}
