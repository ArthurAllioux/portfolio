import Pia from "@/app/experience/Pia"
import Takima from "./Takima"
import Webedia from "./Webedia"

export default function ExperienceContainer() {
  return (
    <section className="flex h-full w-full max-w-6xl flex-col items-center gap-16 p-2">
      <Pia />
      <Takima />
      <Webedia />
    </section>
  )
}
