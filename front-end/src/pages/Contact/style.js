import styled from "styled-components";

export const ContactPage = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactHeader = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Anek Latin';
  text-align: center;
  gap: 17px;

  h1 {
    color: #EA6927;
    font-size: 70px;
  }

  p, span {
    font-size: 21px;
  }

  p {
    font-weight: 300;
  }

  span {
    color: #00000080;
  }

  .form-header {
    color: #EA6927;
    font-weight: 500;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 30px;

  :last-child{
    height: 200px;
    border-radius: 27px;
  }
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

export const Wallpaper = styled.div`
  width: 50%;
  background: url('images/contactBackground.png') bottom;
  background-size: cover;

`;