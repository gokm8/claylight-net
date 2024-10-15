import Image from 'next/image'
import { Container, Section } from '../craft'
import dynamic from 'next/dynamic'
const Balancer = dynamic(() => import('react-wrap-balancer'), { ssr: false })

export default function AbousUs() {
  const stats = [
    { value: '10+', label: 'Års Erfaring' },
    { value: '50+', label: 'Projekter' },
    { value: '100K', label: 'Tilfredse kunder' },
    { value: '10.000+', label: 'Positive indtryk' }
  ]

  return (
    <Section>
      <Container>
        <div className='grid items-center gap-8 md:grid-cols-2'>
          <div className='space-y-6'>
            <div className='space-y-2'>
              <h3 className='font-semibold text-orange-500'>Vores Historie</h3>
              <h2 className='text-4xl font-bold leading-tight text-gray-50'>
                Vores vision er at skabe unikke visuelle oplevelser
              </h2>
            </div>
            <p className='text-gray-400'>
              <Balancer>
                ClayLight blev grundlagt af en gruppe kreative sjæle med en
                passion for lyskunst og teknologi. Deres fælles vision var at
                skabe skræddersyede lysinstallationer og elektronik, der løfter
                atmosfæren til nye højder.
              </Balancer>
              <br />
              <br />
              <Balancer>
                Forenet af troen på, at æstetik og funktionalitet kan forvandle
                ethvert rum eller event, begyndte de deres rejse med ClayLight.
                Med et dedikeret team af eksperter arbejder de konstant på at
                udvikle innovative løsninger og designe oplevelser, der
                begejstrer og inspirerer.
              </Balancer>
              <br />
              <br />
              <Balancer>
                ClayLight er blevet en global aktør indenfor custom design og
                lysinstallationer, hvor hver skabelse bringer harmoni mellem
                teknologi og kunst.
              </Balancer>
            </p>
          </div>
          <div className='space-y-6'>
            <div className='flex justify-end'>
              <div className='relative w-3/4'>
                <div className='absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black opacity-100'></div>
                <div className='absolute inset-0 z-10 bg-gradient-to-r from-black via-transparent to-black opacity-100'></div>
                <Image
                  src='/pexels.jpg'
                  alt='Grundlæggere arbejder sammen'
                  width={600}
                  height={400}
                  className='hidden h-full w-full object-cover md:block'
                  loading='lazy'
                  blurDataURL='data:image/svg+xml;base64,...'
                />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className='rounded-lg bg-gray-100 p-4 text-center'
                >
                  <div className='text-3xl font-bold'>{stat.value}</div>
                  <div className='text-sm text-gray-600'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
