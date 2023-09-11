import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.div`
  position: absolute;
  padding: 10px 0;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
`;

export const Logo = styled.img`
  margin-left: 100px;
  width: 150px;

  @media (max-width: 440px) {
    margin-left: 30px;
    width: 50px;
  }
`;

export const Menu = styled.ul`
  font-family: 'Anek Latin';
  margin-right: 100px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 440px) {
    display: none;
  }
`;

export const MenuItem = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 16px;
  text-transform: uppercase;
  transition: 0.5s;

  &:hover{
    scale: 1.1;
    color: #EA6927;
  }
`