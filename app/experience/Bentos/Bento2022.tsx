import { BentoGrid, Block, HeaderBlock } from "@/components/ui/Bento"

import Image from "next/image"
import Link from "next/link"
import logoWebedia3 from "@/assets/2022/webedia3-croped.png"
import { ArrowRight } from "lucide-react"
import nft1 from "@/assets/2022/nft/nft1-400x400.png"
import nft3 from "@/assets/2022/nft/nft3-400x400.png"
import nft4 from "@/assets/2022/nft/nft4-400x400.png"
import nft5 from "@/assets/2022/nft/nft5-400x400.png"
import nft6 from "@/assets/2022/nft/nft6-400x400.png"
import nft8 from "@/assets/2022/nft/nft8-400x400.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Bento2022() {
  const nfts = [nft1, nft3, nft4, nft5, nft6, nft8]
  return (
    <BentoGrid>
      <HeaderBlock
        subtitle="Webedia"
        title="Développeur Back End"
        description="Après mon diplôme d'ingénieur en 2022, je tenais à intégrer une entreprise avec une vision artistique. 
          Du coup, j'ai rejoint Webedia en CDD comme développeur back-end. J'ai été chargé de l'aspect technique de l'exploration du Web3.
          J'ai particulierement apprécié le cadre et j'ai même pu aller travailler à Belgrade en Serbie !"
        stack={["ts", "nodejs", "express", "gitlab", "docker"]}
        className="row-span-1"
      ></HeaderBlock>
      <Block className="col-span-12 flex flex-row items-center gap-6 lg:col-span-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col">
            <p className="text-pretty text-sm leading-relaxed tracking-wide">
              L&apos;aboutissement de mon travail se trouve dans la distribution
              des NFT aux 500 participants du concours JV Fan Contest de
              jeuxvideo.com.
            </p>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://fr.webedia-group.com/news/networks/retour-sur-le-jv-fan-contest-2022"
              className="group relative size-fit bg-gradient-to-r from-[#0028BE] to-[#BA0483] bg-clip-text font-semibold text-transparent transition hover:translate-x-6"
            >
              <ArrowRight className="absolute -left-6 text-[#0028BE] opacity-0 transition-opacity group-hover:opacity-100"></ArrowRight>
              Découvrir
            </Link>
          </div>
          <Carousel opts={{}} className="w-[70%]">
            <CarouselContent>
              {nfts.map((nft, i) => {
                return (
                  <CarouselItem
                    key={i}
                    className="transition hover:rotate-1 md:basis-1/2"
                  >
                    <Image
                      src={nft}
                      alt={`nft-${i}`}
                      className="ob pointer-events-none size-32 rounded-md"
                    />
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Block>
      <Block className="col-span-12 flex flex-row items-center p-0 lg:col-span-6">
        <Image src={logoWebedia3} alt="logo-webedia-3" />
      </Block>

      <Block className="col-span-12 flex flex-row items-center gap-6 lg:col-span-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-left text-2xl font-bold">
            D&apos;un point de vue tech..
          </h2>
          <p className="text-pretty text-sm leading-relaxed tracking-wide">
            Côté technique, ma mission principale était de construire une API
            Rest en NodeJs. Cette API avait pour objectif de permettre la
            distribution de NFT à Webedia et à ses partenaires. Cela m&apos;a
            permis de vraiment plonger dans les bases du back-end et de
            renforcer mes compétences sur ce terrain.
          </p>
        </div>
      </Block>
    </BentoGrid>
  )
}
