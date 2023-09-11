import styled from "styled-components";

export const HomePage = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Wallpaper = styled.div`
  width: 50%;
  background: url('images/homeBackground.png');
  background-size: cover;
`;

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  height: 208px;
  margin-bottom: 50px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Input = styled.input`
  width: 300px;
  height: 45px;
  border-radius: 67px;
  border: none;
  box-shadow: 0px 0px 10px #00000040;
  padding: 0 30px;
  text-transform: uppercase;
  font-family: 'Anek Latin';
`;

export const CreateAccount = styled.div`
  margin-top: 60px;
  font-family: 'Anek Latin';
  color: #00000080;
  font-size: 16px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
