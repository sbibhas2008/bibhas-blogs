import { Badge } from '@/components/badge'
import Image from 'next/image'
import { Code2, Server, Repeat, FlaskConical, Brain, Briefcase, Cpu, Projector } from 'lucide-react'
import { Card } from '@/components/card'
import { TechCarousel } from '@/components/tech-carousel'
import SkillsShowcase from '@/components/SkillsShowcase'

const techCategories = [
  {
    icon: <Code2 size={16} className="text-muted-foreground" />,
    label: 'Languages & Frameworks',
    items: ['Node.js', 'TypeScript', 'React', 'Tailwind CSS', 'Python'],
  },
  {
    icon: <Server size={16} className="text-muted-foreground" />,
    label: 'Backend & Infra',
    items: ['AWS', 'Terraform', 'Docker', 'OpenAPI', 'Zod', 'Jest'],
  },
  {
    icon: <Repeat size={16} className="text-muted-foreground" />,
    label: 'Workflow & Automation',
    items: ['Pega', 'GitHub Actions', 'Mono-repo', 'Amazon Connect'],
  },
  {
    icon: <FlaskConical size={16} className="text-muted-foreground" />,
    label: 'Testing & Monitoring',
    items: ['Jest', 'Integration Tests', 'Smoke Tests', 'CI Workflows'],
  },
  {
    icon: <Brain size={16} className="text-muted-foreground" />,
    label: 'AI & LLM',
    items: ['RAG', 'Few-shot learning', 'Prompting', 'Workflow Automation'],
  },
]

function TechSnapshotCompact() {
  return (
    <section className="py-8 mx-auto">
      <h2 className="text-2xl font-semibold mb-6">
        <Cpu className="inline-block mr-2 mb-1" size={20} />
        Tech Snapshot
      </h2>
      <p className="my-6">
        Here’s a quick overview of the tools, languages, and platforms I work with regularly — the backbone of what I
        build, automate, and ship.
      </p>
      <TechCarousel categories={techCategories} />
    </section>
  )
}

function ExperienceSection() {
  return (
    <section className="py-8 mx-auto">
      <h2 className="text-2xl font-semibold mb-6">
        <Briefcase className="inline-block mr-2 mb-1" size={20} />
        Professional Experience
      </h2>
      <div className="space-y-6 pr-4">
        <Card className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-medium">Senior Software Engineer</h3>
            <Badge>2021 - Present</Badge>
          </div>
          <h4 className="text-lg text-muted-foreground mb-3">Company Name</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Led development of a customer-facing API that increased partner integrations by 45%</li>
            <li>Implemented serverless architecture that reduced operational costs by 30%</li>
            <li>Mentored junior developers through code reviews and pair programming sessions</li>
          </ul>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-medium">Software Developer</h3>
            <Badge>2018 - 2021</Badge>
          </div>
          <h4 className="text-lg text-muted-foreground mb-3">Previous Company</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Developed and maintained microservices using Node.js and TypeScript</li>
            <li>Improved CI/CD pipeline reducing deployment time by 25%</li>
            <li>Built internal tools that automated repetitive tasks saving the team 10+ hours weekly</li>
          </ul>
        </Card>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className="py-8 mx-auto">
      <h2 className="text-2xl font-semibold mb-6">
        <Projector className="inline-block mr-2 mb-1" size={20} />
        Notable Projects
      </h2>
      <div className="space-y-6 pr-4">
        <Card className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-medium">Personal Blog Platform</h3>
            <div className="flex gap-2">
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
            </div>
          </div>
          <p className="mb-3 text-muted-foreground">
            A modern, responsive blog platform built with Next.js and Tailwind CSS. Features server-side rendering,
            markdown support, and a custom CMS.
          </p>
          <div className="flex gap-2">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              View Demo
            </a>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              GitHub Repo
            </a>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-medium">AI-Powered Task Manager</h3>
            <div className="flex gap-2">
              <Badge>TypeScript</Badge>
              <Badge>OpenAI</Badge>
            </div>
          </div>
          <p className="mb-3 text-muted-foreground">
            A task management application that uses AI to categorize, prioritize, and suggest completion times for
            tasks. Integrates with calendar apps to automatically schedule work.
          </p>
          <div className="flex gap-2">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              View Demo
            </a>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              GitHub Repo
            </a>
          </div>
        </Card>
      </div>
    </section>
  )
}

const About = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold animate-slide-up">About</h1>
      <div className="mt-8 bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl shadow-lg border border-primary/20 animate-fade-in">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="relative animate-fade-in-delay">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-20 animate-pulse"></div>
            <div className="relative">
              <Image
                className="rounded-full w-28 h-28 sm:w-56 sm:h-56 object-cover border-4 border-white shadow-xl transition-transform hover:scale-105 duration-300"
                width={224}
                height={224}
                quality={100}
                src="https://avatars.githubusercontent.com/u/47727892?v=4"
                loading="lazy"
                alt="profile image"
                unoptimized
              />
            </div>
          </div>
          {/* Information section */}
          <div className="lg:ml-6 flex-1 animate-fade-in-delay">
            <div className="relative inline-block">
              <h2 className="text-3xl font-bold mb-4">Bibhas Sharma</h2>
            </div>
            <p className="text-lg mb-4 leading-relaxed">
              Hi there, I&apos;m a highly-adaptable software engineer with over three years of experience in fast-paced
              startup environments. With a strong product mindset, I prioritise delivering high-impact solutions that
              address business challenges efficiently and with minimal complexity.
            </p>
            <p className="text-lg leading-relaxed">
              As a backend-focused, language-agnostic engineer, I emphasise delivering value to the business over
              specific technology choices, ensuring pragmatic and effective solutions.
            </p>
          </div>
        </div>
      </div>

      <TechSnapshotCompact />
      <SkillsShowcase />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  )
}

export default About
