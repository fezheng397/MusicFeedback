import React from 'react';
import styled from 'styled-components';
import { TimestampFeedbackCard } from '.';
import { Feedback } from 'types/16bars';

type FeedbackListProps = {
  timestampFeedbacks?: Feedback[];
};

const FeedbackList: React.FC<FeedbackListProps> = ({ timestampFeedbacks }) => {
  return (
    <FeedbackListWrapper>
      {timestampFeedbacks.map((timestampFeedback) => (
        <FeedbackCardWrapper>
          <TimestampFeedbackCard
            content={timestampFeedback.content}
            timeStart={timestampFeedback.time_start}
            timeEnd={timestampFeedback.time_end}
          />
        </FeedbackCardWrapper>
      ))}
    </FeedbackListWrapper>
  );
};

const FeedbackListWrapper = styled.div``;

const FeedbackCardWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.layout2};

  :last-child {
    margin-bottom: 0;
  }
`;

export default FeedbackList;
