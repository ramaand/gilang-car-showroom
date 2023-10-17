import Header from '@/components/Header'
import Hero from '@/components/Hero/Hero'
import About from '@/components/Section/About'
import Cars from '@/components/Section/Cars'
import Footer from '@/components/Section/Footer'

export default async function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Footer />
    </main>
  )
}
