import React from 'react';
import styled from 'styled-components';
import { Header3 } from 'components/Typography';
import { Textarea } from 'components/Textarea';
import { FeedbackCard, TimestampForm } from './';
import { mediaQueryMixin } from 'constants/breakpoints';

type TimestampFeedbackProps = {};

const mockFeedbackData = [
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet pharetra justo at scelerisque.',
    timeRange: '1:45-2:30',
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet pharetra justo at scelerisque. Nunc auctor elit tincidunt, rhoncus dui eget, aliquet nibh. Nulla neque est, pulvinar ut leo vitae, malesuada tincidunt nulla. Sed in quam a purus lacinia luctus. Phasellus non rutrum eros.',
    timeRange: '1:45-2:30',
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet pharetra justo at scelerisque. Nunc auctor elit tincidunt, rhoncus dui eget, aliquet nibh. Nulla neque est, pulvinar ut leo vitae, malesuada tincidunt nulla. Sed in quam a purus lacinia luctus. Phasellus non rutrum eros.',
    timeRange: '1:45-2:30',
  },
];

const TimestampFeedback: React.FC<TimestampFeedbackProps> = ({}) => {
  return (
    <div>
      <Header3 marginBottom="layout3">Timestamp feedback</Header3>
      <Wrapper>
        <TimestampForm />
        <div>
          {mockFeedbackData.map((data) => (
            <FeedbackCardWrapper>
              <FeedbackCard description={data.description} timeRange={data.timeRange} />
            </FeedbackCardWrapper>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

const FeedbackCardWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.layout2};

  :last-child {
    margin-bottom: 0;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${({ theme }) => theme.spacing.layout4};

  ${mediaQueryMixin('below', 'md')} {
    display: flex;
    flex-direction: column;
  }
`;

const FeedbackTextarea = styled(Textarea)``;

export default TimestampFeedback;
