"use client"
import SkillList from "./SkillList"
import { useEffect, useState } from "react"

export default function Skills() {
  const frontEndSkills = ["html", "css", "js", "ts", "react", "next"]
  const backEndSkills = ["java", "spring", "ts", "nodejs"]

  const [animateActive, setanimateActive] = useState(false)

  const animating = () => {
    setanimateActive((prev) => !prev)
    setTimeout(() => {
      setanimateActive((prev) => !prev)
    }, 1500)
  }
  useEffect(() => {
    animating()
    const intervalId = setInterval(() => {
      animating()
    }, 20000)
    return () => clearInterval(intervalId)
  }, [])
  return (
    <div className="flex flex-col items-start gap-4">
      <h2 className="text-xl font-semibold underline decoration-2 underline-offset-4">
        Ma stack
      </h2>
      <div className="flex flex-col items-start">
        <SkillList
          skillList={frontEndSkills}
          title="Front-end"
          animate={animateActive}
        />
        <SkillList skillList={backEndSkills} title="Back-end" animate={false} />
      </div>
    </div>
  )
}
