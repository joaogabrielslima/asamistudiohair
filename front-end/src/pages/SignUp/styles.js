import styled from "styled-components";

export const SignUpPage = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;

  @media (max-width: 440px) {
    max-width: 100%;
  }
`;

export const Wallpaper = styled.div`
  width: 50%;
  background: url('images/homeBackground.png');
  background-size: cover;

  @media (max-width: 440px) {
    display: none;
  }
`;

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 440px) {
    width: 70%;
    margin: 0 auto;
  }
`;

export const Logo = styled.img`
  height: 170px;
  margin-bottom: 20px;

  @media (max-width: 440px) {
    height: 100px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 440px) {
    max-width: 100%;
  }
`;

export const InputLine = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 10px;

  input, select {
    width: 50%;
  }
  
  select {
    border: none;
    border-radius: 67px;
    box-shadow: 0px 0px 10px #00000040;
    padding: 0 30px;
    text-transform: uppercase;
    font-family: 'Anek Latin';
  }
  
`

export const Input = styled.input`
  width: 300px;
  height: 45px;
  border-radius: 67px;
  border: none;
  box-shadow: 0px 0px 10px #00000040;
  padding: 0 30px;
  text-transform: uppercase;
  font-family: 'Anek Latin';

  @media (max-width: 440px) {
    width: 100%;
  }
`;

export const InputButton = styled.input`
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
`;


export const Login = styled.div`
  font-family: 'Anek Latin';
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 10px;
  p {
    color: #00000080;
  }
`;