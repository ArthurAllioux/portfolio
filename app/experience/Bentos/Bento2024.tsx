import { BentoGrid, Block, HeaderBlock } from "@/components/ui/Bento"
import logoPia from "@/assets/2024/logo-pia.svg"
import logoCvdm from "@/assets/2024/logo-cvdm.png"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Bento2024() {
  return (
    <BentoGrid>
      <HeaderBlock
        subtitle="Freelance"
        title="Développeur et Designer Front-end"
        description="Ces derniers temps, j’ai décidé de me recentrer sur le côté créatif de mon travail. Je me suis formé au design UI/UX pour mieux comprendre comment créer des interfaces à la fois esthétiques et fonctionnelles. En parallèle, j’ai aussi enchaîné quelques missions en freelance, allant de la refonte d’interfaces à la création de sites vitrines pour des petites entreprises."
        stack={["figma", "next", "ts", "tailwind", "github"]}
        className=""
      ></HeaderBlock>
      <Block className="col-span-12 flex flex-row items-center gap-6 lg:col-span-6">
        <Image src={logoPia} alt="logoPia" className="size-16" />
        <div className="flex flex-col gap-1">
          <p className="text-pretty text-sm leading-relaxed tracking-wide">
            J&apos;ai dévellopé la landing page de pia.com. Pia est une
            application d&apos;appel payant entre un consultant et son public.
          </p>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://pia-landing.vercel.app/"
            className="group relative font-semibold text-[#FF385D] transition hover:translate-x-6"
          >
            <ArrowRight className="absolute -left-6 opacity-0 transition-opacity group-hover:opacity-100"></ArrowRight>
            Découvrir
          </Link>
        </div>
      </Block>
      <Block className="col-span-12 flex flex-row items-center gap-6 lg:col-span-6">
        <Image src={logoCvdm} alt="logoCvdm" className="size-16 scale-125" />
        <div className="flex flex-col gap-1">
          <p className="text-pretty text-sm leading-relaxed tracking-wide">
            J&apos;ai designé puis dévellopé la landing page de Coloc en Val de
            Marne. Coloc en Val de Marne est une association d&apos;accueil
            d&apos;adultes en situation de handicap mental.
          </p>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://cdvm-ebon.vercel.app/"
            className="group relative font-semibold text-[#7a9dd8] transition hover:translate-x-6"
          >
            <ArrowRight className="absolute -left-6 opacity-0 transition-opacity group-hover:opacity-100"></ArrowRight>
            Découvrir
          </Link>
        </div>
      </Block>
    </BentoGrid>
  )
}

{
  /* <h2>Freelance</h2>
                <p>Jai fait blabla, mettre la Stack</p>
                <div className="flex flex-row">
                  <Link href={"https://pia-landing.vercel.app/"}>
                    <Image
                      src={logoPia}
                      alt="logo-pia"
                      className="size-48 object-contain"
                    />
                  </Link>
                  <Link href={"https://cdvm-ebon.vercel.app/"}>
                    <Image
                      src={logoCvdm}
                      alt="logo-coloc-en-val-de-marne"
                      className="size-48 object-contain"
                    />
                  </Link>
                </div>
                <h2>Freelance</h2>
                <p>Jai fait blabla, mettre la Stack</p>
                <div className="flex flex-row">
                  <Link href={"https://pia-landing.vercel.app/"}>
                    <Image
                      src={logoPia}
                      alt="logo-pia"
                      className="size-48 object-contain"
                    />
                  </Link>
                  <Link href={"https://cdvm-ebon.vercel.app/"}>
                    <Image
                      src={logoCvdm}
                      alt="logo-coloc-en-val-de-marne"
                      className="size-48 object-contain"
                    />
                  </Link>
                </div> */
}
