import React from 'react';
import styled from 'styled-components';
import { Header3 } from 'components/Typography';
import { TimestampFeedbackDetails, TimestampFeedbackList } from 'page-components/Review/components';
import { mediaQueryMixin } from 'constants/breakpoints';
import { mockTimestampFeedback, mockTimestampFeedbacks } from 'mocks/api/Feedback';

type Mode = 'create' | 'view';

type TimestampFeedbackProps = {
  mode: Mode;
};

const TimestampFeedback: React.FC<TimestampFeedbackProps> = ({ mode }) => {
  return (
    <div>
      <Header3 marginBottom="layout3">Timestamp feedback</Header3>
      <Wrapper>
        <TimestampFeedbackList timestampFeedbacks={mockTimestampFeedbacks} />
        <TimestampFeedbackDetails
          content={mockTimestampFeedback.content}
          timeStart={mockTimestampFeedback.time_start}
          timeEnd={mockTimestampFeedback.time_end}
        />
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
