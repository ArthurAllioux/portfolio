import Image from "next/image"
import bureau from "@/assets/bureau.webp"
import { FollowerPointerCard } from "@/components/ui/following-pointer"
import CustomCursorForImageLabel from "../../components/ui/custom-cursors"

export default function AboutContainer() {
  return (
    <div className="flex min-h-screen flex-col items-center p-tight lg:items-end">
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
          <h3 className="text-xl font-semibold">
            Salut à toi, nouvel arrivant ! Bienvenue sur mon portfolio.{" "}
          </h3>
          <p>
            Comme tu l&apos;auras compris, je m&apos;appelle Arthur, j&apos;ai
            25 ans et je suis développeur. Je suis tombé dans l&apos;univers du
            développement un peu par hasard à l&apos;EPF, une école
            d&apos;ingénieurs. C&apos;est en développant un petit jeu de société
            en Java que j&apos;ai réalisé que c&apos;était fait pour moi.
            J&apos;ai tout de suite adoré la créativité sans limite
            qu&apos;offre la programmation.
          </p>
          <p>
            J&apos;avoue que dire &quot;je suis un créatif&quot; me fait
            toujours un peu hésiter, de peur que ça paraisse prétentieux. Mais
            il faut être honnête, je prends vraiment plaisir à créer. C&apos;est
            sûrement pour ça que je me suis autant intéressé au design ces
            dernières années. D&apos;ailleurs, j&apos;espère que le design de
            mon portfolio te plaît !
          </p>
          <p>
            Pour ce qui est de mon travail, j&apos;aime évoluer dans un cadre
            calme. Un fauteuil confortable, une bonne playlist apaisante en
            fond, et je suis dans ma zone. J&apos;aime aussi partager mes
            connaissances et je suis un blagueur avec mes collègues.
          </p>
          <p>
            En résumé, je suis quelqu&apos;un de plutôt décontracté, créatif et
            attentif aux émotions. J&apos;aime que mon travail ait du sens.s. Si
            tu veux en savoir plus sur mon parcours, c&apos;est juste en dessous
            !
          </p>
        </div>
      </div>
    </div>
  )
}
