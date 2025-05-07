"use client"
import Image from "next/image"
import Link from "next/link"
import SkillList from "@/app/presentation/SkillList"
import logoWebedia from "@/assets/2022/webedia3-removebg-preview.png"
import webediaBg from "@/assets/2022/webedia-bg.png"
import ConfettiAnimated from "@/components/ui/ConfettiAnimated"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function Webedia() {
  const [isHovered, setIsHovered] = useState(false)
  const webediaStack = [
    { name: "ts" },
    { name: "nodejs" },
    { name: "express" },
    { name: "gitlab" },
    { name: "docker" },
    { name: "mongodb" },
    { name: "postgres" },
  ]
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })
  return (
    <motion.div
      className="grid max-w-6xl grid-cols-1 items-center overflow-hidden rounded-xl bg-gradient-to-tr from-white/20 to-white/60 shadow-md lg:grid-cols-3"
      ref={ref}
      initial="initial"
      animate={isInView && "animate"}
      variants={{
        initial: {
          scale: 0,
          opacity: 0,
        },
        animate: {
          scale: 1,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 1,
        stiffness: 500,
        damping: 60,
      }}
    >
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://fr.webedia-group.com/news/networks/retour-sur-le-jv-fan-contest-2022"
        className="relative col-span-1 flex h-full flex-col items-center justify-center gap-4 p-4 font-semibold text-white transition *:z-10"
      >
        <Image
          src={webediaBg}
          alt={"logo.name"}
          className="absolute inset-0 size-full object-cover"
        />
        <Image
          src={logoWebedia}
          alt={"logo.name"}
          className="mt-4 w-72 object-cover"
        />

        <div
          className="flex flex-row items-center justify-center gap-2"
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
            <div className="flex w-full flex-row items-center justify-between">
              <h2 className="text-xl font-black tracking-tight lg:text-3xl">
                Webedia
              </h2>
            </div>
            <h3 className="text-lg font-bold tracking-tight text-secondary">
              Développeur back-end et web3
            </h3>
          </div>
          <div className="flex flex-col gap-4 text-pretty text-sm leading-relaxed tracking-wide">
            <p>
              Après mon diplôme d&apos;ingénieur en 2022, je tenais à intégrer
              une entreprise avec une vision artistique. Du coup, j&apos;ai
              rejoint Webedia en CDD comme développeur back-end. J&apos;ai été
              chargé de l&apos;aspect technique de l&apos;exploration du Web3.
              J&apos;ai particulierement apprécié le cadre et j&apos;ai même pu
              aller travailler à Belgrade en Serbie !
            </p>

            <p>
              Côté technique, ma mission principale était de construire une API
              Rest en NodeJs. Cette API avait pour objectif de permettre la
              distribution de NFT par Webedia et ses partenaires. Cela m&apos;a
              permis de vraiment plonger dans les bases du back-end et de
              renforcer mes compétences sur ce terrain.
            </p>
            <p>
              L&apos;aboutissement de mon travail se trouve dans la distribution
              des NFT aux 500 participants du concours JV Fan Contest de
              jeuxvideo.com.{" "}
              <Link
                href="https://opensea.io/fr/collection/jv-genesis-pass"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 hover:decoration-2"
              >
                Découvrez la collection !
              </Link>
            </p>
          </div>
        </div>
        <SkillList skillList={webediaStack} theme="light" variant="small" />
      </div>
    </motion.div>
  )
}
