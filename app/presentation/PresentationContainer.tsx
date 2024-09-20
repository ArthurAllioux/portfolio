import MeContainer from "./MeContainer"
import Skills from "./Skills"

export default function PresentationContainer() {
  return (
    <div className="flex h-screen w-full flex-col gap-16">
      <MeContainer />
      <Skills />
    </div>
  )
}
