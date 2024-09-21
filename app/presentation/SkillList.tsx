"use client"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function SkillList({
  skillList,
  title,
  animate,
}: {
  skillList: string[]
  title: string
  animate: boolean
}) {
  return (
    <div className="mb-4 flex w-full flex-row items-center gap-x-4">
      <h3 className="min-w-24 whitespace-nowrap border-r-2 border-primary pr-4 font-semibold">
        {title}
      </h3>
      <ul className="flex flex-row flex-wrap items-center gap-3">
        {skillList.map((skill, i) => {
          const hoverClassText = i === 0 && animate && "opacity-100"
          const hoverClassImage =
            i === 0 && animate && "-translate-y-3 lg:-translate-y-4"
          return (
            <li
              className={cn(
                "group relative flex flex-col items-center justify-center",
              )}
              key={i}
            >
              <Image
                className={cn(
                  "size-8 transition-all group-hover:-translate-y-3 lg:size-12 lg:group-hover:-translate-y-4",
                  hoverClassImage,
                )}
                src={`https://skillicons.dev/icons?i=${skill}`}
                alt="skills"
                width={32}
                height={32}
              />
              <p
                className={cn(
                  "absolute -bottom-2 text-sm font-medium capitalize italic opacity-0 transition-all group-hover:opacity-100 lg:text-base",
                  hoverClassText,
                )}
              >
                {skill}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
