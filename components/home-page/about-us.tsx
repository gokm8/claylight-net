import Image from 'next/image'
import { Container, Section } from '../craft'
import { Balancer } from 'react-wrap-balancer'

export default function AbousUs() {
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
            <div className='overflow-hidden rounded-xl'>
              <Image
                src='/placeholder.svg?height=400&width=600'
                alt='Founders working together'
                width={600}
                height={400}
                className='w-full object-cover'
              />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              {[
                { value: '10+', label: 'Års Erfaring' },
                { value: '50+', label: 'Projekter' },
                { value: '100K', label: 'Tilfredse kunder' },
                { value: '10.000+', label: 'Positive indtryk' }
              ].map((stat, index) => (
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
