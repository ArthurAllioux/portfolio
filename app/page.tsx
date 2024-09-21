import React from "react"
import HeroContainer from "./hero/HeroContainer"
import PresentationContainer from "./presentation/PresentationContainer"

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center">
      <HeroContainer />
      <div className="flex flex-col">
        <PresentationContainer />
      </div>
    </div>
  )
}
