import Footer from '@/components/Footer'
import HeaderSection from '@/components/HeaderSection'
import NavBar from '@/components/NavBar'
import AboutSection from '@/components/AboutSection'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
     <NavBar />
     <HeaderSection />
     <AboutSection />
     <Footer />
    </div>
  )
}
