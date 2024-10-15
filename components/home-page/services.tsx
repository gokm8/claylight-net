'use client'
import React, { useState } from 'react'
import { TransitionPanel } from '@/components/ui/transition-panel'
import { Container, Section } from '../craft'
import Balancer from 'react-wrap-balancer'

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  const ITEMS = [
    {
      title: 'Custom Lysinstallationer',
      subtitle: 'Skræddersyede Løsninger til Unikke Oplevelser',
      content: (
        <>
          Hos ClayLight specialiserer vi os i at designe og implementere
          skræddersyede lysinstallationer, der skaber stemningsfulde og unikke
          omgivelser.
          <br />
          <br />
          Vores lysinstallationer er ideelle til både events og faste
          installationer, hvor lyset spiller en afgørende rolle i at skabe den
          rette atmosfære.
          <br />
          <br />
          Med vores ekspertise indenfor avanceret lyssætning, kan vi omdanne
          enhver lokation til en visuelt imponerende oplevelse, uanset om det er
          en natklub, koncert eller privat begivenhed. Vores team arbejder tæt
          sammen med dig for at sikre, at din vision bliver til virkelighed,
          mens vi anvender den nyeste teknologi til at skabe en uforglemmelig
          visuel oplevelse.
        </>
      )
    },
    {
      title: 'Elektronik til Events',
      subtitle: 'Avanceret Teknologi til Enestående Begivenheder',
      content: (
        <>
          ClayLight leverer banebrydende elektronik til events, hvor innovation
          og pålidelighed er i fokus.
          <br />
          <br /> Vores løsninger inkluderer avanceret teknologisk udstyr og
          specialfremstillede installationer, der sikrer, at dine arrangementer
          skiller sig ud.
          <br />
          <br />
          Vi leverer alt fra integrerede lys- og lydsystemer til interaktive
          elektroniske elementer, der gør dine begivenheder mindeværdige. Vores
          team af eksperter samarbejder med eventplanlæggere og arrangører for
          at skabe unikke oplevelser, der opfylder selv de højeste
          forventninger.
        </>
      )
    },
    {
      title: 'Custom Design',
      subtitle: 'Unikke Designløsninger til Visuel Forvandling',
      content: (
        <>
          ClayLight tilbyder skræddersyede designløsninger, der forvandler
          ethvert rum og event til en visuelt imponerende oplevelse.
          <br />
          <br />
          Vores team af kreative specialister arbejder tæt sammen med dig for at
          forstå dine ønsker og skabe unikke designs, der er både funktionelle
          og æstetisk tiltalende.
          <br />
          <br />
          Fra specialfremstillede lys- og elektronikinstallationer til kreative
          scenedesigns og kunstneriske koncepter, leverer vi løsninger, der
          skiller sig ud og efterlader et varigt indtryk.
        </>
      )
    }
  ]

  return (
    <Section>
      <Container>
        <h1 className='mb-4 text-start text-4xl font-bold text-gray-50'>
          SERVICES
        </h1>
        <div className='mb-4 flex space-x-2'>
          {ITEMS.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-md px-3 py-1 text-sm font-medium ${
                activeIndex === index
                  ? 'bg-gray-800 text-gray-100'
                  : 'bg-gray-700 text-gray-400'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className='overflow-hidden border-t border-gray-700'>
          <TransitionPanel
            activeIndex={activeIndex}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            variants={{
              enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
              center: { opacity: 1, y: 0, filter: 'blur(0px)' },
              exit: { opacity: 0, y: 50, filter: 'blur(4px)' }
            }}
          >
            {ITEMS.map((item, index) => (
              <div key={index} className='py-2'>
                <h3 className='mb-2 font-medium text-gray-100'>
                  {item.subtitle}
                </h3>
                <div className='md:w-1/2 h-[350px]'>
                  <Balancer className='text-gray-400'>{item.content}</Balancer>
                </div>
              </div>
            ))}
          </TransitionPanel>
        </div>
      </Container>
    </Section>
  )
}
