import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, Database, Wrench } from "lucide-react"
import Image from "next/image"

const skillCategories = {
  frontend: {
    icon: Code2,
    description: "Building beautiful, responsive user interfaces",
    skills: [
      {
        name: "React",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        level: 90,
      },
      {
        name: "Next.js",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
        level: 85,
      },
      {
        name: "TypeScript",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        level: 80,
      },
      {
        name: "Tailwind CSS",
        logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        level: 95,
      },
      {
        name: "HTML5",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        level: 90,
      },
      {
        name: "JavaScript",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        level: 85,
      },
    ],
  },
  backend: {
    icon: Database,
    description: "Creating robust server-side applications",
    skills: [
      {
        name: "Node.js",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
        level: 85,
      },
      {
        name: "Python",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        level: 75,
      },
      {
        name: "PostgreSQL",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
        level: 80,
      },
      {
        name: "MongoDB",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
        level: 85,
      },
      {
        name: "Express",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
        level: 80,
      },
      {
        name: "GraphQL",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
        level: 70,
      },
    ],
  },
  tools: {
    icon: Wrench,
    description: "Development tools and technologies",
    skills: [
      {
        name: "Git",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
        level: 90,
      },
      {
        name: "Docker",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
        level: 75,
      },
      {
        name: "VS Code",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
        level: 95,
      },
      {
        name: "Figma",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
        level: 80,
      },
      {
        name: "AWS",
        logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
        level: 70,
      },
      {
        name: "Jenkins",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
        level: 75,
      },
    ],
  },
}

export default function Skills() {
  return (
    <section id="skills" className="space-y-6 glass-panel p-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-white">Skills</h2>
        <p className="text-gray-200">My technical skills and proficiency levels in various technologies</p>
      </div>

      <Tabs defaultValue="frontend" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
        </TabsList>
        {Object.entries(skillCategories).map(([category, { icon: Icon, description, skills }]) => (
          <TabsContent key={category} value={category} className="mt-6">
            <Card className="bg-black/50 border border-white/10">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icon className="h-6 w-6 text-white" />
                  <div>
                    <CardTitle className="capitalize text-white">{category}</CardTitle>
                    <CardDescription className="text-gray-300">{description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-md border border-white/20 p-1 bg-white/10">
                            <Image
                              src={skill.logo || "/placeholder.svg"}
                              alt={`${skill.name} logo`}
                              width={32}
                              height={32}
                              className="invert"
                            />
                          </div>
                          <span className="font-medium text-white text-sm md:text-base">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-300">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}

