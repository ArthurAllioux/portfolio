import Image, { StaticImageData } from "next/image"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

export default function SkillList({
  skillList,
  theme,
  animate,
  variant,
}: {
  skillList: { name: string; image?: StaticImageData }[]
  theme?: "light" | "dark"
  animate?: boolean
  variant?: "small"
}) {
  const style = cva([], {
    variants: {
      image: {
        small: ["lg:size-8"],
      },
      text: {
        small: ["lg:text-sm"],
      },
    },
  })
  return (
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
                style({ image: variant }),
                hoverClassImage,
              )}
              src={
                skill.image ??
                `https://skillicons.dev/icons?i=${skill.name}&theme=${theme || "dark"}`
              }
              alt="skills"
              width={32}
              height={32}
            />
            <p
              className={cn(
                "absolute -bottom-2 select-none text-sm font-medium capitalize italic opacity-0 transition-all group-hover:opacity-100 lg:text-base",
                style({ text: variant }),
                hoverClassText,
              )}
            >
              {skill.name}
            </p>
          </li>
        )
      })}
    </ul>
  )
}
