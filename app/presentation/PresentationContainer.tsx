import MeContainer from "./MeContainer"
import Skills from "./Skills"

export default function PresentationContainer() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-12 p-tight lg:gap-32">
      <MeContainer />
      <Skills />
    </div>
  )
}
