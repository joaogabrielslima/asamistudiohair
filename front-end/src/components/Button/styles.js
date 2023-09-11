import styled from "styled-components";

export const Button = styled.button`
  background-color: #EA6927;
  padding: 11px 41px;
  box-shadow: 5px 5px 3px 0px rgba(0, 0, 0, 0.25);
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 136px;
  font-family: 'Anek Latin';
  font-weight: 400;
  color: #fff;
  transition: 0.5s;
  border: none;
  
  &:hover {
    transform: translateY(-10%);
    box-shadow: 5px 10px 3px 0px rgba(0, 0, 0, 0.25);
  }
`