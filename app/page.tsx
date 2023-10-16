import Hero from '@/components/Hero'
import About from '@/components/Section/About'
import Cars from '@/components/Section/Cars'

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Hero />
      <Cars />
      <About />
    </main>
  )
}
