import React from 'react';
import { Page, Section } from 'components/Layout';
import { SongSection, CreateReviewSection } from 'page-components/Review';
import { Navbar } from 'components/Navbar';

const ReviewDashboard = () => {
  return (
    <Page>
      <Navbar />
      <Section>
        <SongSection />
      </Section>
      <Section>
        <CreateReviewSection />
      </Section>
    </Page>
  );
};

export default ReviewDashboard;
