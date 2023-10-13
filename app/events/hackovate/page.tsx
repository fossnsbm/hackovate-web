import HeaderSection from '@/components/HeaderSection'
import NavBar from '@/components/NavBar'
import AboutSection from '@/components/AboutSection'
import LongFooter from '@/components/LongFooter'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
     <NavBar />
     <HeaderSection />
     <AboutSection />
     <LongFooter />
    </div>
  )
}
