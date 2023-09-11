import React from 'react'
import * as S from './styles';
import { Link } from "react-router-dom";
import Button from '../Button';

export default function Navbar() {
  return (
    <S.Navbar>
      <Link to='/'>
        <S.Logo src="/images/logo.png" />
      </Link>
      <S.Menu>
        <S.MenuItem to='servicos'>
          Serviços
        </S.MenuItem>
        <S.MenuItem to='contato'>
          Fale conosco
        </S.MenuItem>
        <Link to='/agendamento' >
          <Button>
            Agende aqui
          </Button>
        </Link>  
      </S.Menu>
    </S.Navbar>
  )
}
