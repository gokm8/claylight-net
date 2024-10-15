import React from 'react'
import { LightBoard } from '../ui/light-board'
import { Section } from '../craft'

const DarkLightBoard = () => {
  return (
    <Section>
      <LightBoard
        gap={1}
        lightSize={4}
        rows={5}
        text='C l a y L i g h t'
        font='default'
        updateInterval={100}
        colors={{
          drawLine: 'rgba(50, 50, 50, 0.7)',
          background: '#111111',
          textDim: 'rgba(80, 80, 80, 0.5)',
          textBright: 'rgba(150, 150, 150, 0.9)'
        }}
      />
    </Section>
  )
}

export default DarkLightBoard
