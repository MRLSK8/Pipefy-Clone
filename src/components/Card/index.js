import React from 'react';

import { Container, Label } from './styles';

export default function Card() {
  return (
    <Container>
      <header>
        <Label color='#7159C1' />
      </header>
      <p>Fazer a migração completa do servidor</p>
      <img
        src='https://api.adorable.io/avatars/40/abott@adorable'
        alt='Avatar'
      />
    </Container>
  );
}
