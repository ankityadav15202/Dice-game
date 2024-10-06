import React, { useState } from 'react'
import styled from 'styled-components'

export const RoleDice = ({CurrentDice, rollDice}) => {

  
  return (
    <DiceContainer>
      <div>
        <img src={`/img/dice/dice_${CurrentDice}.png`} alt="" 
        onClick={rollDice}/>
      </div>
      <p>Click on dice to roll</p>
    </DiceContainer>
  )
}


const DiceContainer = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    margin-top: 48px;
    p{
      font-size: 24px;
    }
    img{
      &:hover{
        cursor: pointer;
      }
    }
`;