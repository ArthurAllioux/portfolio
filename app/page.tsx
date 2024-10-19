import PresentationContainer from "./presentation/PresentationContainer"
import AboutContainer from "./about/AboutContainer"
import ExperienceContainer from "./experience/ExperienceContainer"
import Footer from "@/components/ui/Footer"

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center">
      <PresentationContainer />
      <ExperienceContainer />
      <AboutContainer />
      <Footer />
    </div>
  )
}
