import Hero from '@/components/home-page/hero'
import LogoCarousel from '@/components/home-page/logo-carousel'
import Testimonials from '@/components/home-page/testimonials'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <LogoCarousel />
    </>
  )
}
