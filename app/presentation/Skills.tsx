import SkillList from "./SkillList"

export default function Skills() {
  const frontEndSkills = ["html", "css", "js", "ts", "react", "next"]
  const backEndSkills = ["java", "spring", "ts", "nodejs"]

  return (
    <div className="flex flex-col items-start gap-4">
      <h2 className="w-fit text-xl font-semibold underline decoration-2 underline-offset-4">
        Ma stack
      </h2>
      <div className="flex flex-col items-start">
        <SkillList skillList={frontEndSkills} title="Front-end" />
        <SkillList skillList={backEndSkills} title="Back-end" />
      </div>
    </div>
  )
}
