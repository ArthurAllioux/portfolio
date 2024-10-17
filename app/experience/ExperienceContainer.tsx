import { Timeline } from "@/components/ui/timeline"

import Bento2024 from "./Bentos/Bento2024"
import Bento2023 from "./Bentos/Bento2023"
import Bento2022 from "./Bentos/Bento2022"
export default function ExperienceContainer() {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center p-tight">
      <Timeline
        data={[
          {
            title: "2024",
            content: <Bento2024 />,
          },
          {
            title: "2023",
            content: <Bento2023 />,
          },
          {
            title: "2022",
            content: <Bento2022 />,
          },
        ]}
      />
    </section>
  )
}
