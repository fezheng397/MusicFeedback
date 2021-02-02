import React from 'react';
import { Page, Section } from 'components/Layout';
import { SongSection } from 'page-components/Review';

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
