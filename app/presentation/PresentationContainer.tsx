import Me from "./Me"
import Skills from "./Skills"

export default function PresentationContainer() {
  return (
    <section className="flex flex-col justify-center gap-12 p-2 pt-8 md:gap-32 md:pt-24">
      <Me />
      <Skills />
    </section>
  )
}
