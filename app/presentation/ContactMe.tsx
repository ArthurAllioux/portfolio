import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ElevatedButton from "@/components/ui/ElevatedButton"
import { cn } from "@/lib/utils"
import { ArrowRight, Linkedin, MailCheck, PhoneCall } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import bgWaves from "@/assets/bg-waves.svg"
export function ContactMe() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ElevatedButton
          className={cn(
            "rounded-lg bg-secondary px-6 font-semibold",
            "bg-[linear-gradient(110deg,rgb(var(--secondary-rgb)),45%,rgb(var(--background-rgb)),55%,rgb(var(--secondary-rgb)))] bg-[length:300%_100%] hover:animate-shimmer",
          )}
        >
          Me contacter
        </ElevatedButton>
      </DialogTrigger>

      <DialogContent className="overflow-hidden bg-background p-8">
        <Image
          src={bgWaves}
          alt=""
          className="pointer-events-none absolute left-0 top-0 -z-50"
        />
        <DialogHeader className="">
          <DialogTitle className="text-4xl font-black text-primary">
            Me contacter
          </DialogTitle>
          <DialogDescription>
            Choisissez l&apos;option qui vous convient
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 p-4">
          <div className="flex flex-row gap-4">
            <MailCheck />
            <p>arthur.allioux@orange.fr</p>
            <div className="ml-auto flex flex-row-reverse gap-1">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={"mailto:arthur.allioux@orange.fr"}
                className="peer font-semibold text-secondary hover:text-foreground"
              >
                M&apos;écrire
              </Link>
              <ArrowRight className="pointer-events-none -translate-x-8 opacity-0 transition peer-hover:translate-x-0 peer-hover:opacity-100"></ArrowRight>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <Linkedin />
            <p>Arthur ALLIOUX</p>
            <div className="ml-auto flex flex-row-reverse gap-1">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/arthur-allioux/"
                className="peer font-semibold text-secondary hover:text-foreground"
              >
                Se connecter
              </Link>
              <ArrowRight className="pointer-events-none -translate-x-8 opacity-0 transition peer-hover:translate-x-0 peer-hover:opacity-100"></ArrowRight>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <PhoneCall />
            <p>+33 6 73 78 72 76</p>
            <div className="ml-auto flex flex-row-reverse gap-1">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="tel:+33673787276"
                className="peer font-semibold text-secondary hover:text-foreground"
              >
                M&apos;appeller
              </Link>
              <ArrowRight className="pointer-events-none -translate-x-8 opacity-0 transition peer-hover:translate-x-0 peer-hover:opacity-100"></ArrowRight>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
