import React from 'react';
import { Section } from 'components/Layout';
import { SongSection } from 'page-components/review';

const ReviewDashboard = () => {
  return (
    <div>
      <Section>
        <SongSection />
      </Section>
    </div>
  );
};

export default ReviewDashboard;
