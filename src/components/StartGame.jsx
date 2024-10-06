import styled from "styled-components"
import { Button } from "../styled/Button"
import dice from "../../public/img/dices.svg"

export const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
      <img src={dice} alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  max-width: 1180px;
  align-items: center;
  height: 100vh;
  margin: 0 auto;

  .content{
    h1{
      font-size: 96px;
      white-space: nowrap;
      margin: 0;
    }
  }
`;


