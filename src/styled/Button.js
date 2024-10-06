import styled from "styled-components";

export const Button = styled.button`
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  color: white;
  padding: 10px 18px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.5s ease-in ;
  /* font-weight: 600; */


  &:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s ease-in ;
  }
`;

export const OutlineButton = styled(Button)`
    background-color: white;
    border: 1px solid black;
    color: black;

     &:hover{
    background-color: black;
    color: white;
    border: 1px solid black;
    transition: 0.3s ease-in ;
  }
`
