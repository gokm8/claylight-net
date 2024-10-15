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
import Balancer from 'react-wrap-balancer'

const projects = [
  {
    title: 'LED Cirkel og Smiley for Rumors',
    description:
      'En kreativ LED installation i loftet med en cirkel og smiley, som skaber en unik atmosfære på natklubben.',
    image: '/projects/rumors.jpg',
    tags: ['Custom Lysinstallation', 'Custom Design', 'Smiley']
  },
  {
    title: 'LED Cirkel og Smiley for Rumors',
    description:
      'En kreativ LED installation i loftet med en cirkel og smiley, som skaber en unik atmosfære på natklubben.',
    image: '/projects/rumors.jpg',
    tags: ['Custom Lysinstallation', 'Custom Design', 'Smiley']
  },
  {
    title: 'LED Cirkel og Smiley for Rumors',
    description:
      'En kreativ LED installation i loftet med en cirkel og smiley, som skaber en unik atmosfære på natklubben.',
    image: '/projects/rumors.jpg',
    tags: ['Custom Lysinstallation', 'Custom Design', 'Smiley']
  },
  {
    title: 'LED Cirkel og Smiley for Rumors',
    description:
      'En kreativ LED installation i loftet med en cirkel og smiley, som skaber en unik atmosfære på natklubben.',
    image: '/projects/rumors.jpg',
    tags: ['Custom Lysinstallation', 'Custom Design', 'Smiley']
  },
  {
    title: 'LED Cirkel og Smiley for Rumors',
    description:
      'En kreativ LED installation i loftet med en cirkel og smiley, som skaber en unik atmosfære på natklubben.',
    image: '/projects/rumors.jpg',
    tags: ['Custom Lysinstallation', 'Custom Design', 'Smiley']
  },
  {
    title: 'LED Cirkel og Smiley for Rumors',
    description:
      'En kreativ LED installation i loftet med en cirkel og smiley, som skaber en unik atmosfære på natklubben.',
    image: '/projects/rumors.jpg',
    tags: ['Custom Lysinstallation', 'Custom Design', 'Smiley']
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
            <Card
              key={index}
              className='overflow-hidden border-gray-200 bg-neutral-900 hover:border-2 hover:border-gray-200'
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className='h-48 w-full object-cover'
              />
              <CardHeader>
                <CardTitle className='text-gray-100'>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-gray-200'>
                  <Balancer>{project.description}</Balancer>
                </CardDescription>
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
