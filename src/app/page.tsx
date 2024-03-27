
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Email from "@/app/components/Email";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#0a192f]">
        <Navbar />
        <div className="container mt-32 mx-auto px-4 md:px-8 lg:px-16">
          <Hero />
          <About />
          <Projects />
          <Email />
        </div>
        <Footer />
      </main>
    </>
  );
}
