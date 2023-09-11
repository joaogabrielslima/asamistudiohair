import styled from "styled-components";

export const AgendamentoPage = styled.section `
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const UserInfo = styled.div `
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Anek Latin';
  font-size: 32px;

  img {
    margin-bottom: 25px;
  }

  span {
    color: #EA6927;
    
  }

  button {
    margin-top: 80px;
  }
`;

export const ProfilePhoto = styled.img`
  border-radius: 100%;
  height: 200px;
`

