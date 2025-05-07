import { BentoGrid, Block, HeaderBlock } from "@/components/ui/Bento"
import takimaBg from "@/assets/2023/takima-bg.png"
import Image from "next/image"

export default function Bento2023() {
  return (
    <BentoGrid>
      <HeaderBlock
        title="Développeur Full Stack"
        subtitle="Takima"
        description="En 2023, j’ai rejoint Takima en tant que développeur full stack. J’ai d’abord été formé à Spring puis au dévelopement front-end au travers d'une formation complète. J'ai ensuite rejoint une mission."
        stack={[
          "java",
          "ts",
          "spring",
          "svelte",
          "gitlab",
          "docker",
          "tailwind",
        ]}
        className="row-span-1"
      ></HeaderBlock>

      <Block className="col-span-12 flex flex-row items-center gap-6 lg:col-span-6">
        <div className="flex flex-col gap-1">
          <p className="text-pretty text-sm leading-relaxed tracking-wide">
            Une image, les collègues
          </p>
        </div>
      </Block>
      <Block className="col-span-12 flex flex-row items-center gap-6 overflow-hidden p-0 lg:col-span-6">
        <Image src={takimaBg} alt="takima" className="" />
      </Block>
      <Block className="col-span-12 flex flex-row items-center gap-6 lg:col-span-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-left text-2xl font-bold">
            D&apos;un point de vue tech..
          </h2>
          <p className="text-pretty text-sm leading-relaxed tracking-wide">
            J&apos;ai travaillé sur le front-end d’un service de paiement pour
            un grand groupe commercial. Ça a été une expérience super
            enrichissante. Cette mission m’a vraiment fait progresser, surtout
            avec le développement front-end. Malheureusement, le projet n&apos;a
            pas été rendu public.
          </p>
        </div>
      </Block>
    </BentoGrid>
  )
}
