export const LinkStyled = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a className="hover:underline hover:text-primary" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
