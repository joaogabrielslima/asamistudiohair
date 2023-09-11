import React from 'react';
import * as S from './styles';

export default function Button({children, to}) {
  return (
    <S.Button to={to}>
      {children}
    </S.Button>
  )
}
