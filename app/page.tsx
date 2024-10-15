import AboutUs from '@/components/home-page/about-us'
import CompletedProjects from '@/components/home-page/completed-projects'
import GreenLightBoard from '@/components/home-page/GreenLightBoard'
import Hero from '@/components/home-page/hero'
import { HeroTwo } from '@/components/home-page/heroTwo'
import LightBoardClay from '@/components/home-page/lightboardClay'
import LogoCarousel from '@/components/home-page/logo-carousel'
import RedLightBoard from '@/components/home-page/RedLightBoard'
import { Services } from '@/components/home-page/services'
import Testimonials from '@/components/home-page/testimonials'
import YellowLightBoard from '@/components/home-page/YellowLightBoard'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <HeroTwo />
      <LogoCarousel />
      <AboutUs />
      <RedLightBoard />
      <Services />
      <YellowLightBoard />
      <CompletedProjects />
      <GreenLightBoard />
    </>
  )
}
