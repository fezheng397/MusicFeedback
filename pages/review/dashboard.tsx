import React from 'react';
import { Page, Section } from 'components/Layout';
import { SongSection, GiveReviewSection } from 'page-components/Review';

const ReviewDashboard = () => {
  return (
    <Page>
      <Section>
        <SongSection />
      </Section>
      <Section>
        <GiveReviewSection />
      </Section>
    </Page>
  );
};

export default ReviewDashboard;
