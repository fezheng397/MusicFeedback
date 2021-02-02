import React from 'react';
import Head from 'next/head';
import { Header1 } from 'components/Typography';
import { Button } from 'components/Button';
import { Play } from 'components/Icons';
import { Container } from 'components/Container';

export default function Home({}) {
  return (
    <Container size='lg'>
      <Header1>Hello header</Header1>
      <Button size='lg' buttonTheme='secondary'>
        Button text
      </Button>
      <Play size={24} />
    </Container>
  );
}
