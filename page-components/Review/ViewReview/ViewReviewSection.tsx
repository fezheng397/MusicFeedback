import React from 'react';
import { Container } from 'components/Container';
import { GeneralFeedback, StructuredFeedback, TimestampFeedback } from '.';
import { Section } from 'components/Layout';
import { mockGeneralFeedback } from 'mocks/api/Feedback';

const ViewReviewSection = () => {
  return (
    <Container size="lg">
      <Section>
        <TimestampFeedback mode="view" />
      </Section>
      <Section>
        <GeneralFeedback content={mockGeneralFeedback.content} />
      </Section>
      <Section>
        <StructuredFeedback />
      </Section>
    </Container>
  );
};

export default ViewReviewSection;
