import React from 'react';
import * as S from './style';

export default function ContactPage() {
  return (
    <S.ContactPage>
      <S.Content>
        <S.ContactHeader>
          <h1>Fale Conosco</h1>
          <p>+55 11 91234-4562</p>
          <p>asamistudiohair@email.com</p>
          <span>ou</span>
          <p className='form-header'>Nós entraremos em contato com você, digite sua mensagem</p>
        </S.ContactHeader>
        <S.LoginForm>
          <S.Input placeholder='nome completo' type='text'/>
          <S.Input placeholder='email' type='text'/>
          <S.Input placeholder='digite sua mensagem' type='text'/>
        </S.LoginForm>
      </S.Content>
      <S.Wallpaper />
    </S.ContactPage>
  )
}
