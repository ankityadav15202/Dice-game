import styled from "styled-components"

export const TotalScore = ({Score}) => {
  return (
      <ScoreContainer>
        <h1>{Score}</h1>
        <p>Total Score</p>
      </ScoreContainer>
  );
};


const ScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;
    h1{
        font-size: 100px;
        margin: 0;
    }
    p{
        font-size: 24px;
        font-weight: 500;
        margin: 0;
    }
`;