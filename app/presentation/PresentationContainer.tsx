import Me from "./Me"
import Skills from "./Skills"

export default function PresentationContainer() {
  return (
    <section className="flex snap-center snap-normal flex-col justify-center gap-12 p-tight lg:gap-32">
      <Me />
      <Skills />
    </section>
  )
}
