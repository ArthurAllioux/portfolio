import MePhoto from "./MePhoto"
import Links from "./Links"

export default function Me() {
  return (
    <div className="flex w-full flex-col gap-x-24 max-lg:items-center lg:flex-row xl:gap-x-48">
      <div className="flex max-w-3xl flex-col gap-6 lg:gap-12">
        <div className="flex flex-col gap-2 lg:gap-8">
          <div className="w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent md:whitespace-nowrap">
            <h1 className="text-5xl font-black tracking-tight lg:text-7xl">
              Arthur Allioux
            </h1>
            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Développeur web
            </h2>
          </div>
          <p className="max-w-sm lg:text-lg">
            Salut ! Je m&apos;appelle Arthur, je suis un jeune développeur
            full-stack basé à Paris 🥐.
          </p>
        </div>
        <Links />
      </div>
      <MePhoto className="order-first lg:order-none" />
    </div>
  )
}
