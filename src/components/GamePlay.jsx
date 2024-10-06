import styled from "styled-components"
import { TotalScore } from "./TotalScore"
import { NumberSelector } from "./NumberSelector"
import { RoleDice } from "./RoleDice"
import { useState } from "react"
import { Button, OutlineButton } from "../styled/Button"

export const GamePlay = () => {
  const [Score, setScore] = useState(0)
  const [SelectedNumber, setSelectedNumber] = useState()
  const [CurrentDice, setCurrentDice] = useState(1)
  const [error, seterror] = useState("")
  const [Rules,setRules] = useState("")

  const RandomNumbergenerator = (min, max)=>{
    return Math.floor(Math.random() * (max - min) + min)
  }

  const rule = ()=>{
    setRules({})
  }
  
  const rollDice = ()=>{
    if(SelectedNumber==undefined){
      seterror("Please Select a number...")
      return
    }
    const randomNumber = RandomNumbergenerator(1,7)
    console.log(randomNumber)
    setCurrentDice(randomNumber)
    
    
    
    if(SelectedNumber == randomNumber){
      setScore((prev)=>{
        return prev+2
      })
    }else{
      setScore((prev)=>{
        return prev-2
      })
    }
    
    setSelectedNumber(undefined)
  }


  return (
    <MainContainer>
        <div className="topSection">
            <TotalScore Score={Score}/>
            <NumberSelector seterror={seterror}SelectedNumber={SelectedNumber} setSelectedNumber={setSelectedNumber} error={error} />
        </div>
        <RoleDice CurrentDice={CurrentDice} rollDice={rollDice} />
        <div className="btns">
            <OutlineButton onClick={()=>setScore(0)}>Reset Score</OutlineButton>
            <Button>Show Rules</Button>
        </div>
    </MainContainer>
  )
}

const MainContainer = styled.div`
    padding-top: 70px;
    .topSection{
    display: flex;
    justify-content: space-between;
    align-items: end;
    }
    .btns{
      display: flex;
      margin-top: -25px;
      /* flex-direction: column; */
      /* align-items: center; */
      justify-content: center;
      gap: 10px;
    }
`