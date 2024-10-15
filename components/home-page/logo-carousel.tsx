'use client' // Add this at the top

import { useEffect, useRef } from 'react'

import Image from 'next/image'

// Definér logodata uden for komponenten
const logos = [
  {
    src: '/logo-carousel/rumors-green.svg',
    alt: 'Rumors Club',
    name: 'RUMORS CLUB'
  },
  {
    src: '/logo-carousel/roskilde-festival.svg',
    alt: 'Roskilde Festival',
    name: 'ROSKILDE FESTIVAL'
  },
  {
    src: '/logo-carousel/tivoli-friheden.svg',
    alt: 'Tivoli Friheden',
    name: 'TIVOLI FRIHEDEN'
  },
  {
    src: '/logo-carousel/Culuturebox.svg',
    alt: 'Culture Box',
    name: 'CULTURE BOX'
  },
  {
    src: '/logo-carousel/bella-center.svg',
    alt: 'Bella Center',
    name: 'BELLA CENTER'
  },
  {
    src: '/logo-carousel/Carlsberg-logo.svg',
    alt: 'Carlsberg',
    name: 'CARLSBERG'
  }
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
    <div className='bg-[#111111] py-4 md:py-8'>
      <div className='mx-auto max-w-5xl'>
        <div className='inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_left,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'>
          <ul
            ref={logosRef}
            className='flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8'
          >
            {logos.map((logo, index) => (
              <li
                key={index}
                className='flex flex-col items-center justify-center'
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={125}
                  height={125}
                  quality={95}
                  className='h-[75px] w-auto opacity-80 brightness-0 contrast-50 filter'
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LogoCarousel
