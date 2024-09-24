export default function CustomCursorForImageLabel({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center p-2 shadow-2xl">
      <div className="size-4 rounded-full border-4 border-accent bg-background"></div>
      <div className="h-4 w-1 bg-accent"></div>
      <h6 className="shadow-elevate-left whitespace-nowrap rounded-lg border border-accent bg-background p-2 font-bold tracking-tight shadow-accent">
        {text}
      </h6>
    </div>
  )
}
