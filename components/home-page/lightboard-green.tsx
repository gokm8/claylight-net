import React from 'react'
import { LightBoard } from '../ui/light-board'
import { Section } from '../craft'

const GreenLightBoard = () => {
  return (
    <Section>
      <LightBoard
        gap={1}
        lightSize={4}
        rows={5}
        text='C l a y L i g h t G r e e n'
        font='default'
        updateInterval={1000}
        colors={{
          drawLine: 'rgba(0, 255, 0, 0.7)',
          background: 'rgba(0, 0, 0, 0.3)',
          textDim: 'rgba(0, 100, 0, 0.5)',
          textBright: 'rgba(50, 255, 50, 0.9)'
        }}
      />
    </Section>
  )
}

export default GreenLightBoard
