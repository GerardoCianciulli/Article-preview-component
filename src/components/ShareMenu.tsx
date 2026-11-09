import { useEffect, useId, useRef, useState } from 'react'
import SocialLink from './SocialLink'
import ShareIcon from '../../assets/images/icon-share.svg?react'
import FacebookIcon from '../../assets/images/icon-facebook.svg?react'
import TwitterIcon from '../../assets/images/icon-twitter.svg?react'
import PinterestIcon from '../../assets/images/icon-pinterest.svg?react'
import './ShareMenu.css'

type ShareMenuProps = {
  title: string
  imageUrl: string
}

function ShareMenu({ title, imageUrl }: ShareMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuId = useId()
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close the menu on Escape or when clicking anywhere outside of it.
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }
    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isOpen])

  const pageUrl = encodeURIComponent(window.location.href)
  const text = encodeURIComponent(title)
  const media = encodeURIComponent(new URL(imageUrl, window.location.href).href)

  const links = [
    {
      label: 'Share on Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
      icon: FacebookIcon,
    },
    {
      label: 'Share on Twitter',
      href: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${text}`,
      icon: TwitterIcon,
    },
    {
      label: 'Share on Pinterest',
      href: `https://pinterest.com/pin/create/button/?url=${pageUrl}&media=${media}&description=${text}`,
      icon: PinterestIcon,
    },
  ]

  return (
    <div className="share" ref={containerRef}>
      <div className="share__menu" id={menuId} hidden={!isOpen}>
        <p className="share__label">Share</p>
        <ul className="share__links">
          {links.map((link) => (
            <li key={link.label}>
              <SocialLink {...link} />
            </li>
          ))}
        </ul>
      </div>

      <button
        ref={buttonRef}
        className="share__button"
        type="button"
        aria-label="Share this article"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <ShareIcon className="share__icon" aria-hidden="true" focusable="false" />
      </button>
    </div>
  )
}

export default ShareMenu
