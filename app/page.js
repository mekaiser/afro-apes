import Footer from '@/components/Home/Footer/Footer'
import Gallery from '@/components/Home/Gallery/Gallery'
import Hero from '@/components/Home/Hero/Hero'
import Stats from '@/components/Home/Stats/Stats'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero/>
      <Stats/>
      <Gallery/>
      <Footer/>
    </>
  )
}
