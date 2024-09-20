import MePhoto from "./MePhoto"
import SocialLinks from "./SocialLinks"

export default function MeContainer() {
  return (
    <div className="flex w-full flex-col items-center lg:flex-row lg:gap-32">
      <div className="relative flex max-w-3xl flex-col gap-8">
        <div className="w-fit whitespace-nowrap bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          <h2 className="text-5xl font-black lg:text-7xl">Arthur Allioux</h2>
          <h3 className="text-4xl font-bold lg:text-5xl">Développeur web</h3>
        </div>
        <p className="max-w-sm lg:text-lg">
          Salut ! Je m&apos;appelle Arthur, je suis un jeune développeur
          full-stack basé à Paris 🥐.
        </p>
        <SocialLinks />
      </div>
      <MePhoto className="order-first lg:order-none" />
    </div>
  )
}
