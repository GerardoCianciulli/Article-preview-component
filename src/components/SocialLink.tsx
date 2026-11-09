import type { ComponentType, SVGProps } from 'react'

type SocialLinkProps = {
  label: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

function SocialLink({ label, href, icon: Icon }: SocialLinkProps) {
  return (
    <a className="social-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <Icon aria-hidden="true" focusable="false" />
    </a>
  )
}

export default SocialLink
