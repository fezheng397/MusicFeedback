import React from 'react';
import styled from 'styled-components';
import { Header3 } from 'components/Typography';
import { TimestampFeedbackList, TimestampForm } from './';
import { mediaQueryMixin } from 'constants/breakpoints';
import { mockTimestampFeedback } from 'mocks/api/Feedback';

type TimestampFeedbackProps = {};

const TimestampFeedback: React.FC<TimestampFeedbackProps> = ({}) => {
  return (
    <div>
      <Header3 marginBottom='layout3'>Timestamp feedback</Header3>
      <Wrapper>
        <TimestampForm />
        <TimestampFeedbackList timestampFeedback={mockTimestampFeedback} />
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
