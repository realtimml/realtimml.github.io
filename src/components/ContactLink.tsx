interface ContactLinkProps {
  icon: React.ReactNode
  label: string
  href?: string
  onClick?: () => void
}

export function ContactLink({ icon, label, href, onClick }: ContactLinkProps) {
  const content = (
    <>
      {icon}
      <span className="relative text-5xl md:text-8xl xl:text-9xl font-bold">
        {label}
        <div className="absolute right-0 bottom-0 bg-white h-2 w-0 group-hover:w-full transition-all duration-300"></div>
      </span>
    </>
  )

  if (onClick) {
    return (
      <button
        className="flex items-center justify-between group w-full cursor-pointer"
        onClick={onClick}
      >
        {content}
      </button>
    )
  }

  return (
    <a
      className="flex items-center justify-between group w-full"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  )
}
