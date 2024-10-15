'use client'
import React, { useState } from 'react'
import { TransitionPanel } from '@/components/ui/transition-panel'
import { Container, Section } from '../craft'

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  const ITEMS = [
    {
      title: 'Custom Lysinstallationer',
      subtitle: 'Refining Visual Harmony',
      content:
        'Explore the principles of motion aesthetics that enhance the visual appeal of interfaces. Learn to balance timing, easing, and the flow of motion to create seamless user experiences.'
    },
    {
      title: 'Elektronik til Events',
      subtitle: 'Narrative and Expression',
      content:
        'Delve into how motion can be used as an artistic tool to tell stories and evoke emotions, making digital interactions feel more human and expressive.'
    },
    {
      title: 'Custom Design',
      subtitle: 'Mastering Motion Tools',
      content:
        'Gain proficiency in advanced techniques such as physics-based animations, 3D transformations, and complex sequencing to elevate your design skills and implementation.'
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
                <p className='text-gray-400'>{item.content}</p>
              </div>
            ))}
          </TransitionPanel>
        </div>
      </Container>
    </Section>
  )
}
