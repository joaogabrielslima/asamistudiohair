import React from 'react'
import * as S from './styles';
import Button from 'components/Button';
import { Link } from 'react-router-dom';

export default function AgendamentoPage() {
  return (
    <S.AgendamentoPage>
      <S.UserInfo>
        <S.ProfilePhoto src='./images/userPhoto.png' />
        <p>Bem-vinda de volta</p>
        <span>Ana</span>
        <Link to='/'>
          <Button>sair</Button>
        </Link>
      </S.UserInfo>
    </S.AgendamentoPage>
  )
}
