import Links from "@/app/presentation/Links"

export default function Footer() {
  return (
    <div className="size-full border-t-8 border-double border-secondary px-tight py-12 shadow-big-inner">
      <div className="mx-auto flex size-full max-w-4xl flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <p className="font-semibold md:text-lg">
          Copyright © 2024. Tous droits réservés
        </p>
        <Links />
      </div>
    </div>
  )
}
