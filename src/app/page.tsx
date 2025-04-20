import { Card } from '@/components/card'
import { Button } from '@/components/Button'
import { ArrowRightIcon } from 'lucide-react'

// Mock data - this will come from the middleware that parses and handles the content of the website.
const publications = [
  {
    title: 'How to build a serverless API with AWS Lambda and Fastify',
    description:
      'In this article, we will build a serverless API using AWS Lambda and Fastify. We will also cover how to deploy the API using the Serverless Framework.',
    url: 'https://www.freecodecamp.org/news/build-a-serverless-api-with-aws-lambda-and-fastify/',
    publicationDate: '2021-08-02',
  },
]

const Publication = ({
  publication,
}: {
  publication: { title: string; url: string; description: string; publicationDate: string }
}) => {
  return (
    <Card className="mt-8 flex flex-col gap-y-3">
      <div>
        <h2 className="text-2xl font-bold">
          <a target="_blank" href={publication.url}>
            {publication.title}
          </a>
        </h2>
        <p className="text-sm text-fontSecondary">
          {publication.publicationDate} . {Math.ceil(publication.description.split(' ').length / 200)} min read
        </p>
      </div>

      <p>{publication.description}</p>
    </Card>
  )
}

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center max-w-2xl mx-auto px-6 py-8"
      style={{ zIndex: 1 }}
    >
      <p className="italic text-2xl text-[#e4d5bd] mb-2 font-serif">Hey, I&apos;m</p>
      <h1 className="text-5xl font-bold mb-4 text-[#e4d5bd] font-serif">Bibhas Sharma</h1>
      <p className="text-lg leading-relaxed">
        I&apos;m a software engineer who loves building tools that feel thoughtful and intuitive. Currently crafting
        backend solutions at CBA - and always learning something new.
      </p>
      <div className="flex items-center justify-center gap-4 mt-6">
        <Button href="/about">
          <>
            <span>About me</span>
            <ArrowRightIcon size={18} className="ml-2" />
          </>
        </Button>
        <Button href="/about" variant="secondary">
          <>
            <span>View my work</span>
          </>
        </Button>
      </div>
      <div className="italic mt-6 text-lg font-serif flex items-center justify-center gap-2">
        <span className="text-[#e4d5bd]">✦</span>
        Building calm tech with intention
        <span className="text-[#e4d5bd]">✦</span>
      </div>
    </section>
  )
}

const Home = () => {
  return (
    <div className="p-8">
      <HeroSection />
      <h1 className="text-4xl font-bold my-8">Recent publications</h1>
      {!publications.length && <p className="text-lg text-gray-500">No publications yet.</p>}
      {publications.map((publication, idx) => (
        <Publication key={idx} publication={publication} />
      ))}
    </div>
  )
}

export default Home
