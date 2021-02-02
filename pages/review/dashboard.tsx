import React from 'react';
import { Page, Section } from 'components/Layout';
import { SongSection } from 'page-components/review';

const ReviewDashboard = () => {
  return (
    <Page>
      <Section>
        <SongSection />
      </Section>
    </Page>
  );
};

export default ReviewDashboard;
