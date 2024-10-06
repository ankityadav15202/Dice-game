import React, { createElement, useState } from 'react'
import styled from 'styled-components'
export const NumberSelector = ({seterror,error,SelectedNumber, setSelectedNumber}) => {
    const array = [1,2,3,4,5,6]

    const numberSelectorhandeler = (value)=>{
        setSelectedNumber(value)
        seterror("")
    }

  return (
    <NumberSelectorContainer>
        <h4>{error}</h4>
        <div className='flex'>
            {
                array.map((value,i)=>{
                    return <Box
                    $isSelected ={value == SelectedNumber}
                    onClick={()=>numberSelectorhandeler(value)}
                    key={i}
                    >
                        {value}
                    </Box>
                })
            }
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}


const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 24px;
        cursor: pointer;
    }
    p{
        font-size: 24px;
        margin-bottom: 0;
        font-weight: 700;
    }
    h4{
        color: red;
    }
`;


const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${({ $isSelected }) => ($isSelected ? 'black' : 'white')};
    color: ${({$isSelected})=> $isSelected ? "white":"black"};
`;