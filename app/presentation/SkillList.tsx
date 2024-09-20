export default function SkillList({
  skillList,
  title,
}: {
  skillList: string[]
  title: string
}) {
  return (
    <div className="flex w-full flex-col gap-1 lg:flex-row lg:items-center lg:gap-4">
      <h3 className="whitespace-nowrap border-primary font-semibold lg:w-24 lg:border-r-2 lg:pr-4">
        {title}
      </h3>
      <div className="flex flex-row items-center">
        {skillList.map((skill, i) => {
          return (
            <div
              className="group relative flex size-16 flex-col items-center justify-center"
              key={i}
            >
              {/*eslint-disable-next-line @next/next/no-img-element*/}
              <img
                className="transition-all group-hover:-translate-y-4"
                src={`https://skillicons.dev/icons?i=${skill}`}
                alt="skills"
              />
              <p className="absolute bottom-0 font-medium capitalize italic opacity-0 transition-all group-hover:opacity-100">
                {skill}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
