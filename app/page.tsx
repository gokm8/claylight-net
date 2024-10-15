import { HeroTwo } from '@/components/home-page/hero-two'
import AboutUs from '@/components/home-page/about-us'
import { Services } from '@/components/home-page/services'
import CompletedProjects from '@/components/home-page/completed-projects'

// carousel
import LogoCarousel from '@/components/home-page/logo-carousel'

// lightboards
import DarkLightBoard from '@/components/home-page/lightboard-dark'

export default function Home() {
  return (
    <>
      <HeroTwo />
      <LogoCarousel />
      <AboutUs />
      <DarkLightBoard />
      <Services />
      <DarkLightBoard />
      <CompletedProjects />
      <DarkLightBoard />
    </>
  )
}
