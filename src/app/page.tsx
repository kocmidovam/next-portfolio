import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Email from "@/components/Email"
import Footer from "@/components/Footer"
import HexBackground from "@/components/HexBackground"

export default function Home() {
  return (
    <>
      <main className=' flex min-h-screen flex-col bg-[#0a192f] '>
        <HexBackground />
        <Navbar />
        <div className='z-10 relative container mt-28 mx-auto px-4 md:px-8 lg:px-16'>
          <Hero />
          <About />
          <Projects />
          <Email />
        </div>
        <Footer />
      </main>
    </>
  )
}
