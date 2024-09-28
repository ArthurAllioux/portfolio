import Image from "next/image"
import Link from "next/link"
import { ContactMe } from "./ContactMe"

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
    </div>
  )
}
