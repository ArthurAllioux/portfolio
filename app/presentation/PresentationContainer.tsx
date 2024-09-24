import Me from "./Me"
import Skills from "./Skills"

export default function PresentationContainer() {
  return (
    <div className="flex min-h-screen flex-col justify-center gap-12 p-tight lg:gap-32">
      <Me />
      <Skills />
    </div>
  )
}
