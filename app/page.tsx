import PresentationContainer from "./presentation/PresentationContainer"
import AboutContainer from "./about/AboutContainer"
import ExperienceContainer from "./experience/ExperienceContainer"

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center">
      <PresentationContainer />
      <AboutContainer />
      <ExperienceContainer />
    </div>
  )
}
