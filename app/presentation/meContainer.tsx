import MePhoto from "./MePhoto"
import SocialLinks from "./SocialLinks"

export default function MeContainer() {
  return (
    <div className="flex w-full flex-col gap-x-48 max-lg:items-center lg:flex-row">
      <div className="flex max-w-3xl flex-col gap-6 lg:gap-12">
        <div className="flex flex-col gap-2 lg:gap-8">
          <div className="w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            <h2 className="text-5xl font-black lg:text-7xl">Arthur Allioux</h2>
            <h3 className="text-4xl font-bold lg:text-5xl">Développeur web</h3>
          </div>
          <p className="max-w-sm lg:text-lg">
            Salut ! Je m&apos;appelle Arthur, je suis un jeune développeur
            full-stack basé à Paris 🥐.
          </p>
        </div>
        <SocialLinks />
      </div>
      <MePhoto className="order-first lg:order-none" />
    </div>
  )
}
