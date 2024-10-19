import Image from "next/image"
import bureau from "@/assets/bureau.webp"
import { FollowerPointerCard } from "@/components/ui/following-pointer"
import CustomCursorForImageLabel from "../../components/ui/custom-cursors"
import { Cog } from "lucide-react"

export default function AboutContainer() {
  return (
    <section className="flex flex-col items-center justify-center p-tight lg:items-end">
      <div className="relative flex flex-col items-center gap-8 lg:flex-row">
        <FollowerPointerCard
          customCursor={
            <CustomCursorForImageLabel text="Mon espace de travail" />
          }
          className="size-fit"
        >
          <Image
            alt="about-me"
            src={bureau}
            className="pointer-events-none size-96 rounded-lg object-cover xl:size-128"
          />
        </FollowerPointerCard>
        <div className="flex max-w-prose flex-col justify-center gap-4 text-pretty text-sm leading-relaxed tracking-wide xl:text-base">
          <div className="font-semibold tracking-tight">
            <h2 className="text-secondary">À propos de moi</h2>
            <h3 className="text-xl">Bienvenue sur mon portfolio ! </h3>
          </div>
          <p>
            Comme tu l&apos;auras compris, je m&apos;appelle Arthur, j&apos;ai
            25 ans et <b>je suis développeur.</b> Je suis tombé dans
            l&apos;univers du développement un peu par hasard à l&apos;EPF, une
            école d&apos;ingénieurs. C&apos;est en développant un petit jeu de
            société en Java que j&apos;ai réalisé que c&apos;était fait pour
            moi. J&apos;ai tout de suite adoré <b>la créativité sans limite </b>
            qu&apos;offre la programmation.
          </p>
          <p>
            J&apos;avoue que dire{" "}
            <span className="group relative inline-block px-2 font-medium before:absolute before:inset-0 before:-z-10 before:block before:-skew-y-2 before:rounded-md before:bg-secondary hover:before:bg-transparent">
              <span className="absolute inset-0 -z-10 -translate-y-[50%] -skew-y-2 rounded-md bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 transition duration-300 group-hover:translate-y-[0%] group-hover:opacity-100" />
              <span className="*:duration-500">
                <Cog className="absolute left-12 -z-50 rotate-45 opacity-0 transition-all group-hover:-translate-x-2 group-hover:-translate-y-4 group-hover:-rotate-180 group-hover:opacity-100" />
                <Cog className="absolute left-2 -z-50 rotate-45 opacity-0 transition-all group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:-rotate-180 group-hover:opacity-100" />
                <Cog className="absolute right-2 -z-50 rotate-45 opacity-0 transition-all group-hover:translate-x-2 group-hover:translate-y-2 group-hover:rotate-180 group-hover:opacity-100" />
              </span>
              <span>&quot;je suis un créatif&quot;</span>
            </span>{" "}
            me fait toujours un peu hésiter, de peur que ça paraisse
            prétentieux. Mais il faut être honnête, je prends vraiment plaisir à
            créer. C&apos;est sûrement pour ça que{" "}
            <b>je me suis intéressé au design ces dernières années. </b>
            D&apos;ailleurs, j&apos;espère que le design de mon portfolio te
            plaît !
          </p>
          <p>
            Pour ce qui est de mon travail, j&apos;aime évoluer dans
            <b> un cadre calme et humain.</b> J&apos;apprécie autant les
            instants de focus individuel que l&apos;énergie du travail
            collaboratif. Seul, un fauteuil confortable et une playlist
            apaisante <b>me plonge dans ma zone.</b> En équipe, je suis toujours
            surpris par la manière dont la dynamique collective fait émerger des
            idées nouvelles sans effort.
          </p>
          <p>
            En résumé, je suis quelqu&apos;un de plutôt décontracté, créatif et
            attentif aux émotions. J&apos;aime que mon travail ait du sens. Si
            tu veux en savoir plus sur mon parcours,
            <b> c&apos;est juste en dessous !</b>
          </p>
        </div>
      </div>
    </section>
  )
}
