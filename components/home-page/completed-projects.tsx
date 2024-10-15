import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Container, Section } from '../craft'

const projects = [
  {
    title: 'LED Cirkel og Smiley for Rumors',
    description:
      'En kreativ LED installation i loftet med en cirkel og smiley, som skaber en unik atmosfære på natklubben.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Custom Lysinstallation', 'Custom Design', 'Smiley']
  },
  {
    title: 'Health Tracking App',
    description:
      'Mobile application for tracking daily health metrics and providing personalized insights.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['React Native', 'Firebase', 'Machine Learning']
  },
  {
    title: 'Smart Home Dashboard',
    description:
      'Centralized dashboard for controlling and monitoring various smart home devices.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Vue.js', 'IoT', 'WebSockets']
  },
  {
    title: 'Financial Analytics Tool',
    description:
      'Advanced analytics platform for financial data visualization and predictive modeling.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Python', 'Django', 'D3.js']
  }
]

export default function CompletedProjects() {
  return (
    <Section>
      <Container>
        <div className='mb-12'>
          <h2 className='mb-4 text-4xl font-bold text-gray-50'>
            UDVALGTE PROJEKTER
          </h2>
          <p className='max-w-2xl text-xl text-gray-400'>
            Udforsk vores portfolio af succesfulde projekter, der fremviser
            vores ekspertise og innovation på tværs af forskellige områder.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <Card key={index} className='overflow-hidden'>
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className='h-48 w-full object-cover'
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className='flex flex-wrap gap-2'>
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant='secondary'>
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
