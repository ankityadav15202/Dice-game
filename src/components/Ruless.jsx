import styled from 'styled-components';
import React from 'react';
export const Ruless = () => {
  return (
    <RulesContainer>
        <h2>how to play a dice game</h2>
        <div className="text">
            <p>Select any one number</p>
            <p>click in dice image</p>
            <p>after click on dice if selected number is equal to dice number you will get same point as dice</p>
            <p>if you get wrong guess then 2 points will be dedcuted</p>
        </div>
    </RulesContainer>
  )
}


const RulesContainer = styled.div`
    background-color: #fbf1f1;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    h2 {
        font-size: 24px;
        margin-bottom: 16px;
    }

    .text {
        margin-top: 24px;

        p {
            margin-bottom: 12px; /* Add space between the paragraphs */
        }
    }
`;
