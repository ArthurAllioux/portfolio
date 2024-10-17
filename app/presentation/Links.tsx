import Image from "next/image"
import Link from "next/link"
import { ContactMe } from "./ContactMe"
import { ArrowDown, Minus } from "lucide-react"

interface Social {
  href: string
  title: string
  iconLink: string
}

export default function Links() {
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
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              href={social.href}
              className="transition hover:-translate-y-1 hover:scale-105"
              title={social.title}
            >
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
      <ContactMe />
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="./CV-ArthurAllioux.pdf"
        className="group relative flex flex-row items-center gap-1 rounded-lg font-semibold text-primary underline decoration-2 underline-offset-4 transition"
      >
        CV
        <div className="absolute -right-7 -mb-[10px] -translate-x-4 scale-0 transition-all group-hover:translate-x-0 group-hover:scale-100">
          <ArrowDown className="group-hover:animate-bounce" />
          <Minus className="-mt-3" />
        </div>
      </Link>
    </div>
  )
}
