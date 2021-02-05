import React from 'react';
import Head from 'next/head';
import { Header1 } from 'components/Typography';
import { Button } from 'components/Button';
import { Filter, Play } from 'components/Icons';
import { Container } from 'components/Container';

export default function Home({}) {
  return (
    <Container size='lg'>
      <Header1>Hello header</Header1>
      <Button icon={<Filter size={24} />} size='lg' buttonTheme='secondary'>
        Filter
      </Button>
      <Button icon={<Filter size={24} />} size='lg'>
        Filter
      </Button>
      <Play size={24} />
    </Container>
  );
}
