'use client'

import { Section } from '../craft'
import { LightBoard } from '../ui/light-board'

export default function LightBoardDark() {
  return (
    <Section>
      <div>
        <LightBoard
          rows={15}
          lightSize={2}
          gap={1}
          text='Clay Light'
          font='default'
          updateInterval={300}
          colors={{
            background: '#1a1a1a',
            textDim: 'rgba(80, 80, 80, 0.5',
            drawLine: '#ffff99',
            textBright: 'rgba(150, 150, 150, 0.9)'
          }}
        />
      </div>
    </Section>
  )
}
