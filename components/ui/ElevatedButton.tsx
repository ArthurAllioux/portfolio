import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes } from "react"

interface ElevatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
export default function ElevatedButton(props: ElevatedButtonProps) {
  return (
    <button
      className={cn(
        "shadow-primary outline-primary transition-all hover:-translate-y-1 hover:shadow-elevate hover:outline hover:outline-2",
        props.className,
      )}
    >
      {props.children}
    </button>
  )
}
