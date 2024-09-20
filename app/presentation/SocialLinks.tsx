import ElevatedButton from "@/components/ui/ElevatedButton"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface Social {
  href: string
  title: string
  iconLink: string
}

export default function SocialLinks() {
  const socials: Social[] = [
    {
      title: "Linkedin",
      iconLink: "https://skillicons.dev/icons?i=linkedin",
      href: "https://www.linkedin.com/in/arthur-allioux/",
    },
    {
      title: "Github",
      iconLink: "https://skillicons.dev/icons?i=github",
      href: "https://github.com/ArthurAllioux",
    },
  ]
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-row gap-2">
        {socials.map((social, i) => {
          return (
            <Link
              key={i}
              href={social.href}
              className="transition hover:-translate-y-1 hover:scale-105"
              title={social.title}
            >
              {/*eslint-disable-next-line @next/next/no-img-element*/}
              <Image
                src={social.iconLink}
                alt={social.title}
                width={36}
                height={36}
              />
            </Link>
          )
        })}
      </div>

      <ElevatedButton
        className={cn(
          "rounded-md bg-secondary px-6 font-semibold",
          "bg-[linear-gradient(110deg,rgb(var(--secondary-rgb)),45%,rgb(var(--background-rgb)),55%,rgb(var(--secondary-rgb)))] bg-[length:300%_100%] hover:animate-shimmer",
        )}
      >
        Me contacter
      </ElevatedButton>
    </div>
  )
}
