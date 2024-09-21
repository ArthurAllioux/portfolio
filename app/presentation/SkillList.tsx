import Image from "next/image"

export default function SkillList({
  skillList,
  title,
}: {
  skillList: string[]
  title: string
}) {
  return (
    <div className="mb-4 flex w-full flex-row items-center gap-x-4">
      <h3 className="min-w-24 whitespace-nowrap border-r-2 border-primary pr-4 font-semibold">
        {title}
      </h3>
      <div className="flex flex-row flex-wrap items-center gap-3">
        {skillList.map((skill, i) => {
          return (
            <div
              className="group relative flex flex-col items-center justify-center"
              key={i}
            >
              <Image
                className="size-8 transition-all group-hover:-translate-y-3 lg:size-12 lg:group-hover:-translate-y-4"
                src={`https://skillicons.dev/icons?i=${skill}`}
                alt="skills"
                width={32}
                height={32}
              />
              <p className="absolute -bottom-2 text-sm font-medium capitalize italic opacity-0 transition-all group-hover:opacity-100 lg:text-base">
                {skill}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
