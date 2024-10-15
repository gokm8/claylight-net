import React from 'react'
import { LightBoard } from '../ui/light-board'
import { Section } from '../craft'

const LightBoardClay = () => {
  return (
    <Section>
      <LightBoard
        gap={1}
        lightSize={4}
        rows={5}
        text='C l a y L i g h t'
        font='default'
        updateInterval={1000}
        colors={{
          background: 'rgba(0, 0, 0, 0.3)',
          textDim: 'rgba(50, 50, 50, 0.5)',
          textBright: 'rgba(255, 255, 255, 0.9)'
        }}
      />
    </Section>
  )
}

export default LightBoardClay
