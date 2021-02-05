import React from 'react';
import { Page, Section } from 'components/Layout';
import { SongSection, ReviewSection } from 'page-components/Review';

const ReviewDashboard = () => {
  return (
    <Page>
      <Section>
        <SongSection />
      </Section>
      <Section>
        <ReviewSection />
      </Section>
    </Page>
  );
};

export default ReviewDashboard;
