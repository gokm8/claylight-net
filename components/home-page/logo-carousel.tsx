'use client' // Add this at the top

import { useEffect, useRef } from 'react'
import { Section, Container } from '../craft'

// Definér logodata uden for komponenten
const logos = [
  { src: '/icons8-facebook.svg', alt: 'Facebook' },
  { src: '/icons8-facebook.svg', alt: 'Facebook' },
  { src: '/icons8-facebook.svg', alt: 'Facebook' },
  { src: '/icons8-facebook.svg', alt: 'Facebook' },
  { src: '/icons8-facebook.svg', alt: 'Facebook' },
  { src: '/icons8-facebook.svg', alt: 'Facebook' }
]

const LogoCarousel = () => {
  const logosRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const logoList = logosRef.current
    if (logoList) {
      const clone = logoList.cloneNode(true) as HTMLUListElement
      clone.setAttribute('aria-hidden', 'true')
      logoList.parentNode?.appendChild(clone)
    }
  }, [])

  return (
    <Section className='bg-amber-300'>
      <Container>
        <div className='inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'>
          <ul
            ref={logosRef}
            className='animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8'
          >
            {logos.map((logo, index) => (
              <li key={index}>
                <img src={logo.src} alt={logo.alt} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}

export default LogoCarousel
