import React from 'react';
import { Page, Section } from 'components/Layout';
import { ArtistDrive } from 'page-components/ArtistDrive';

const ArtistDrivePage = () => {
  return (
    <Page>
      <Section>
        <ArtistDrive />
      </Section>
    </Page>
  );
};

export default ArtistDrivePage;
