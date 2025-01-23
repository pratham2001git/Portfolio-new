import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import MobileMenu from "@/components/mobile-menu"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import ContactForm from "@/components/contact-form"
import { Toaster } from "@/components/ui/toaster"
import AnimatedBackground from "@/components/animated-background"
import Logo from "@/components/logo"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="container flex h-14 items-center justify-between">
            <Logo />
            <div className="hidden md:block">
              <Navbar />
            </div>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </header>
        <main className="container mx-auto px-6 pt-20">
          <section id="home">
            <Hero />
          </section>
          <div className="space-y-32 py-20">
            <section id="skills">
              <Skills />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="contact" className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-center text-white">Contact Me</h2>
              <div className="max-w-xl mx-auto glass-panel p-8 border border-white/20">
                <ContactForm />
              </div>
            </section>
          </div>
        </main>
        <Footer />
        <Toaster />
      </div>
    </div>
  )
}

