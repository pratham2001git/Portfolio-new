import { Button } from "@/components/ui/button"
import { FileDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
            Pratham Gonate
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer passionate about building web applications that make a difference.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-200"
          >
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-white border-white hover:bg-white/10"
          >
            <FileDown className="mr-2 h-4 w-4 text-white" />
            Resume
          </Button>
        </div>
      </div>
    </section>
  )
}

