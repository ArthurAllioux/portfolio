"use client"
import SkillList from "./SkillList"
import { useEffect, useState } from "react"

export default function Skills() {
  const frontEndSkills = [
    { name: "html" },
    { name: "css" },
    { name: "js" },
    { name: "ts" },
    { name: "react" },
    { name: "next" },
  ]
  const backEndSkills = [
    { name: "java" },
    { name: "spring" },
    { name: "ts" },
    { name: "nodejs" },
    { name: "postgres" },
    { name: "mongodb" },
  ]

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
        Tech stack
      </h2>
      <div className="flex flex-col items-start">
        <div className="mb-4 flex w-full flex-row items-center gap-x-4">
          <h3 className="min-w-24 whitespace-nowrap border-r-2 border-primary pr-4 font-semibold">
            Front-end
          </h3>
          <SkillList skillList={frontEndSkills} animate={animateActive} />
        </div>
        <div className="flex flex-col items-start">
          <div className="mb-4 flex w-full flex-row items-center gap-x-4">
            <h3 className="min-w-24 whitespace-nowrap border-r-2 border-primary pr-4 font-semibold">
              Back-end
            </h3>
            <SkillList skillList={backEndSkills} animate={false} />
          </div>
        </div>
      </div>
    </div>
  )
}
