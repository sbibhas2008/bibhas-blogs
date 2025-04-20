import { Card } from '@/components/card'
import { LinkStyled } from '@/components/LinkStyled'
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
  {
    title: 'Analysing the performance of a React application',
    description:
      'In this article, we will cover how to analyse the performance of a React application using the Performance and Profiler tabs in the Chrome DevTools.',
    url: 'https://www.freecodecamp.org/news/analysing-the-performance-of-a-react-application/',
    publicationDate: '2021-07-26',
  },
  {
    title: 'Analysing the performance of a React application',
    description:
      'In this article, we will cover how to analyse the performance of a React application using the Performance and Profiler tabs in the Chrome DevTools.',
    url: 'https://www.freecodecamp.org/news/analysing-the-performance-of-a-react-application/',
    publicationDate: '2021-07-26',
  },
  {
    title: 'Analysing the performance of a React application',
    description:
      'In this article, we will cover how to analyse the performance of a React application using the Performance and Profiler tabs in the Chrome DevTools.',
    url: 'https://www.freecodecamp.org/news/analysing-the-performance-of-a-react-application/',
    publicationDate: '2021-07-26',
  },
  {
    title: 'Analysing the performance of a React application',
    description:
      'In this article, we will cover how to analyse the performance of a React application using the Performance and Profiler tabs in the Chrome DevTools.',
    url: 'https://www.freecodecamp.org/news/analysing-the-performance-of-a-react-application/',
    publicationDate: '2021-07-26',
  },
  {
    title: 'Analysing the performance of a React application',
    description:
      'In this article, we will cover how to analyse the performance of a React application using the Performance and Profiler tabs in the Chrome DevTools.',
    url: 'https://www.freecodecamp.org/news/analysing-the-performance-of-a-react-application/',
    publicationDate: '2021-07-26',
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

const Home = () => {
  return (
    <div>
      {/* Hero section with adjusted z-index to prevent navigation overlap */}
      <section className="relative" style={{ zIndex: 1 }}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 sm:gap-8 my-8 p-6 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-xl shadow-lg border border-primary/10 animate-fade-in">
          <div className="flex flex-col justify-center gap-y-4 animate-slide-up">
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-secondary inline-block  bg-clip-text">
                Bibhas Sharma
              </h1>
              <div className="absolute -bottom-1 left-0 h-1 w-1/3 bg-gradient-to-r from-primary to-secondary rounded-full animate-expand"></div>
            </div>
            <p className="text-lg">
              Senior Software Engineer @ <LinkStyled href="https://www.home-in.com.au">Home-in, CBA</LinkStyled>
            </p>
            <div className="mt-4 flex gap-x-4">
              <Button href="/about">
                About me
                <ArrowRightIcon size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="sm:col-span-2 sm:p-8 text-fontSecondary animate-fade-in-delay">
            <div className="relative">
              <span className="text-6xl absolute -top-8 -left-6 text-primary/20"></span>
              <p className="text-lg leading-relaxed italic">
                Hi there, I&apos;m a highly-adaptable software engineer with over three years of experience in
                fast-paced startup environments. With a strong product mindset, I prioritise delivering high-impact
                solutions that address business challenges efficiently and with minimal complexity.
              </p>
              <p className="text-lg mt-4 leading-relaxed italic">
                As a backend-focused, language-agnostic engineer, I emphasise delivering value to the business over
                specific technology choices, ensuring pragmatic and effective solutions.
              </p>
              <span className="text-6xl absolute -bottom-12 -right-6 text-primary/20"></span>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-16">
        <h1 className="text-4xl font-bold my-8">Recent publications</h1>
        {publications.map((publication, idx) => (
          <Publication key={idx} publication={publication} />
        ))}
      </div>
    </div>
  )
}

export default Home
