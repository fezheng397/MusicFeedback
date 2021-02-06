import React from 'react';
import styled from 'styled-components';
import { FeedbackCard } from './';
import { Feedback } from 'types/16bars';

type FeedbackListProps = {
  timestampFeedback?: Feedback[];
};

const FeedbackList: React.FC<FeedbackListProps> = ({ timestampFeedback }) => {
  return (
    <FeedbackListWrapper>
      {timestampFeedback.map((timestampFeedback) => (
        <FeedbackCardWrapper>
          <FeedbackCard
            description={timestampFeedback.content}
            timeRange={`${timestampFeedback.time_start}-${timestampFeedback.time_end}`}
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
