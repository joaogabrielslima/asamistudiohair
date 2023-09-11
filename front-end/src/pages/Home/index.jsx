import React from 'react';
import * as S from './style';
import Button from 'components/Button';
import { Link } from 'react-router-dom';


export default function HomePage() {
  return (
    <S.HomePage>
      <S.Wallpaper />
      <S.Content>
        <S.Logo src='/images/logo.png'/>
        <S.LoginForm>
          <S.Input placeholder='email' type='email' name='email'required/>
          <S.Input placeholder='senha' type='password' name='senha' required/>
          <Button type='submit'>
            entrar
          </Button>
        </S.LoginForm>
        <S.CreateAccount>
          <p>ainda não possui conta?</p>
          <Link to='/cadastro'>
            <Button>
              criar conta
            </Button>
          </Link>
          
        </S.CreateAccount>
      </S.Content>
    </S.HomePage>
  )
}
