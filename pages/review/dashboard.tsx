import React from 'react';
import { Page, Section } from 'components/Layout';
import { SongSection, ViewReviewSection } from 'page-components/Review';
import { Navbar } from 'components/Navbar';

const ReviewDashboard = () => {
  return (
    <Page>
      <Navbar />
      <Section>
        <SongSection />
      </Section>
      <Section>
        <ViewReviewSection />
      </Section>
    </Page>
  );
};

export default ReviewDashboard;
