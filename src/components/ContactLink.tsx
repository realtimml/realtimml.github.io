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
      <span className="text-9xl font-bold">
        {label}
        <div className="bg-white h-2 w-0 group-hover:w-full transition-all duration-300 ml-auto"></div>
      </span>
    </>
  )

  if (onClick) {
    return (
      <button
        className="flex justify-between group w-full cursor-pointer"
        onClick={onClick}
      >
        {content}
      </button>
    )
  }

  return (
    <a
      className="flex justify-between group"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  )
}
