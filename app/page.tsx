import PresentationContainer from "./presentation/PresentationContainer"
import AboutContainer from "./about/AboutContainer"

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center">
      <PresentationContainer />
      <AboutContainer />
    </div>
  )
}
