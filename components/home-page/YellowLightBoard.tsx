import React from 'react'
import { LightBoard } from '../ui/light-board'

const YellowLightBoard = () => {
  return (
    <LightBoard
      gap={1}
      lightSize={4}
      rows={5}
      text='C l a y L i g h t Y e l l o w'
      font='default'
      updateInterval={1000}
      colors={{
        drawLine: 'rgba(255, 255, 0, 0.7)',
        background: 'rgba(0, 0, 0, 0.3)',
        textDim: 'rgba(100, 100, 0, 0.5)',
        textBright: 'rgba(255, 255, 50, 0.9)'
      }}
    />
  )
}

export default YellowLightBoard
