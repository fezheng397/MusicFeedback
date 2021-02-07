import React from 'react';
import styled from 'styled-components';
import { Header3 } from 'components/Typography';
import { TimestampFeedbackList, TimestampForm } from 'page-components/Review/components';
import { mediaQueryMixin } from 'constants/breakpoints';
import { mockTimestampFeedbacks } from 'mocks/api/Feedback';

type Mode = 'create' | 'view';

type TimestampFeedbackProps = {
  mode: Mode;
};

const TimestampFeedback: React.FC<TimestampFeedbackProps> = ({ mode }) => {
  return (
    <div>
      <Header3 marginBottom="layout3">Timestamp feedback</Header3>
      <Wrapper>
        <TimestampForm />
        <TimestampFeedbackList timestampFeedbacks={mockTimestampFeedbacks} />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${({ theme }) => theme.spacing.layout4};

  ${mediaQueryMixin('below', 'md')} {
    display: flex;
    flex-direction: column;
  }
`;

export default TimestampFeedback;
