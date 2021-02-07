import React from 'react';
import { Container } from 'components/Container';
import { GeneralFeedback, TimestampFeedback } from '.';
import { Section } from 'components/Layout';
import { mockGeneralFeedback } from 'mocks/api/Feedback';

const CreateReviewSection = () => {
  return (
    <Container size="lg">
      <Section>
        <TimestampFeedback mode="create" />
      </Section>
      <Section>
        <GeneralFeedback />
      </Section>
    </Container>
  );
};

export default CreateReviewSection;
