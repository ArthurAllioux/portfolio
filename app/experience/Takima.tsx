import Image from "next/image"
import SkillList from "@/app/presentation/SkillList"
import logoTakima from "@/assets/2023/logo-takima.png"

export default function Takima() {
  const takimaStack = [
    { name: "java" },
    { name: "spring" },
    { name: "ts" },
    { name: "angular" },
    { name: "svelte" },
    { name: "html" },
    { name: "css" },
    { name: "tailwind" },
    { name: "postgres" },
    { name: "gitlab" },
    { name: "docker" },
  ]
  return (
    <div className="grid max-w-6xl grid-cols-1 items-center overflow-hidden rounded-xl bg-gradient-to-tr from-white/20 to-white/60 shadow-md lg:grid-cols-3">
      <div className="col-span-1 flex h-full items-center justify-center bg-purple-200 p-4 shadow-big-inner shadow-purple-400">
        <Image
          src={logoTakima}
          alt="Takima"
          className="object-cover p-4 max-lg:max-w-72"
        />
      </div>

      <div className="col-span-2 flex h-full flex-col justify-between gap-6 p-4">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-black tracking-tight lg:text-3xl">
              Takima
            </h2>
            <h3 className="text-lg font-bold tracking-tight text-secondary">
              Développeur Full Stack
            </h3>
          </div>
          <div className="mb-2 flex flex-col gap-4 text-pretty text-sm leading-relaxed tracking-wide">
            <p>
              En 2023, j’ai rejoint Takima en tant que développeur full stack.
              J’ai d’abord été formé à Spring puis au dévelopement front-end au
              travers d&apos;une formation complète. J&apos;ai ensuite rejoint
              une mission.
            </p>
            <p>
              J&apos;ai travaillé sur le front-end d’un service de paiement pour
              un grand groupe commercial. L&apos;objectif du produit est de
              fournir un widget de paiement unifié permettant aux commerçants de
              s&apos;interfacer facilement avec différents partenaires de
              paiement. La solution garantit de nouvelles fonctionnalités
              avancées comme le paiement en un clic, le SSO, la synchronisation
              de panier et la gestion de livraison.
            </p>
            <p>
              Le travail en front-end se concentre sur le développement du
              widget en Svelte pour garantir une empreinte mémoire minimale et
              intégrer facilement le produit aux sites clients.
            </p>
          </div>
        </div>
        <SkillList skillList={takimaStack} theme="light" variant="small" />
      </div>
    </div>
  )
}
