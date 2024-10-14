import React from 'react'
import { Section, Container } from '@/components/craft'
import Balancer from 'react-wrap-balancer'

export default function Hero() {
  return (
    <Section>
      <Container className='flex flex-col items-center'>
        <h1 className='mb-4 w-full text-center text-6xl font-black leading-tight tracking-tighter text-gray-50'>
          <Balancer>ClayLight</Balancer>
        </h1>
        <p className='text-center text-xl italic text-gray-100'>
          <Balancer>Custom design, der lyser dine rum op</Balancer>
        </p>
      </Container>
    </Section>
  )
}
