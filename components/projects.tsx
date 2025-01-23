import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "POKEDEX",
    description: "📖✨Pokédex Project: A sleek and interactive website that serves as a comprehensive Pokémon encyclopedia. Built with a modern tech stack, it allows users to explore Pokémon details, stats, and abilities with ease! 🐾⚡",
    image: "./Pokedex.png",
    technologies: ["HTML", "JAVASCRIPT", "BOOTSTRAP"],
    codeLink: "https://github.com/pratham2001git/pokedex-bootsrap",
    demoLink: "https://pokedex-bootsrap.pages.dev/",
  },
  {
    title: "Project Two",
    description: "A mobile-first React application with real-time updates",
    image: "/placeholder.svg?height=300&width=600",
    technologies: ["React", "Firebase", "Material-UI"],
    codeLink: "https://github.com/yourusername/project-two",
    demoLink: "https://project-two-demo.com",
  },
  {
    title: "Project Three",
    description: "An e-commerce platform built with modern web technologies",
    image: "/placeholder.svg?height=300&width=600",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    codeLink: "https://github.com/yourusername/project-three",
    demoLink: "https://project-three-demo.com",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="space-y-6 glass-panel p-6">
      <h2 className="text-3xl font-bold tracking-tight readable-text text-white">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="bg-black/50 border border-white/10 overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={300}
              className="object-cover w-full h-48"
            />
            <CardHeader>
              <CardTitle className="readable-text">{project.title}</CardTitle>
              <CardDescription className="text-gray-300">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs rounded-full bg-white/20 text-white">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Button asChild variant="outline" size="sm" className="flex-1 text-white border-white hover:bg-white/20">
                  <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">Code</Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="flex-1 text-white border-white hover:bg-white/20">
                  <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

