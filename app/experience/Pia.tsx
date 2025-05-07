"use client"
import Image from "next/image"
import Link from "next/link"
import logoPia from "@/assets/2024/logo-black.svg"
import SkillList from "@/app/presentation/SkillList"
import ConfettiAnimated from "@/components/ui/ConfettiAnimated"
import { useState } from "react"
import logoStripe from "@/assets/logos/stripe-logo.svg"
import logoVonage from "@/assets/logos/vonage.png"
import logoExpo from "@/assets/logos/expo.svg"
import logoReactNative from "@/assets/logos/react-native.svg"

export default function Pia() {
  const piaStack = [
    { name: "react" },
    { name: "next" },
    { name: "react native", image: logoReactNative },
    { name: "expo", image: logoExpo },
    { name: "ts" },
    { name: "stripe", image: logoStripe },
    { name: "vonage", image: logoVonage },
    { name: "supabase" },
    { name: "tailwind" },
    { name: "github" },
    { name: "nodejs" },
    { name: "docker" },
  ]
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="grid max-w-6xl grid-cols-1 items-center overflow-hidden rounded-xl bg-gradient-to-tr from-white/20 to-white/60 shadow-md lg:grid-cols-3">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://pia-landing.vercel.app/"
        className="col-span-1 flex h-full flex-col items-center justify-center gap-2 bg-[#FF385D] p-4 font-semibold text-white shadow-big-inner shadow-[#754251] transition"
      >
        <Image src={logoPia} alt="Pia" className="w-24 object-cover" />
        <div
          className="group flex flex-row items-center justify-center gap-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ConfettiAnimated confettiClassName="bg-white" animate={isHovered} />
          Découvrir
          <ConfettiAnimated
            confettiClassName="bg-white"
            direction="right"
            animate={isHovered}
          />
        </div>
      </Link>

      <div className="col-span-2 flex h-full flex-col justify-between gap-6 p-4">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-black tracking-tight lg:text-3xl">
              Pia
            </h2>
            <h3 className="text-lg font-bold tracking-tight text-secondary">
              CTO et lead développeur
            </h3>
          </div>
          <div className="flex flex-col gap-4 text-pretty text-sm leading-relaxed tracking-wide">
            <p>
              Depuis 2024, je suis CTO au sein de la start-up pia.
              L&apos;entreprise a été fondée en 2024 par{" "}
              <Link
                href="https://www.linkedin.com/in/marion-eloy-/"
                className="font-semibold underline underline-offset-2 hover:decoration-2"
              >
                Marion Eloy
              </Link>
              . Son objectif principal est de faciliter les interactions
              directes entre les utilisateurs et leurs clients, tout en
              garantissant une expérience simple, fluide et sécurisée.
            </p>
            <p>
              Je travaille en étroite collaboration avec{" "}
              <Link
                href="https://www.linkedin.com/in/mehdi-alouani/"
                className="font-semibold underline underline-offset-2 hover:decoration-2"
              >
                Mehdi Alouani
              </Link>{" "}
              pour aligner la vision produit avec les choix techniques. Nous
              assurons une rapidité de développement tout en garantissant la
              robustesse du produit. Mon travail s&apos;articule autour de la
              gestion de la roadmap technique, la création de l&apos;UX, et la
              mise en place de solutions scalables qui soutiendront la
              croissance de l&apos;application à mesure qu&apos;elle se
              développe.
            </p>
          </div>
        </div>
        <SkillList skillList={piaStack} theme="light" variant="small" />
      </div>
    </div>
  )
}
