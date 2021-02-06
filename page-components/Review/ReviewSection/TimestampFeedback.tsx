import React from 'react';
import styled from 'styled-components';
import { Header3, Label2, Label4, Paragraph2 } from 'components/Typography';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { Settings } from 'components/Icons';
import { Textarea } from 'components/Textarea';
import { rem } from 'polished';
import FeedbackCard from './FeedbackCard';
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
      <Header3 marginBottom='layout3'>Timestamp feedback</Header3>
      <Wrapper>
        <div>
          <Label2 marginBottom='layout1'>Add or edit a comment:</Label2>
          <CommentSpecification>
            <TimeRangeInputs>
              <TimeInput placeholder='Time start...' />

              <Label4 marginRight='spacing3' marginLeft='spacing3'>
                to
              </Label4>
              <TimeInput placeholder='Time end...' />
            </TimeRangeInputs>
            <SaveButtonWrapper>
              <Button
                buttonTheme='secondary'
                size='lg'
                icon={<Settings size={24} />}
              >
                Save
              </Button>
            </SaveButtonWrapper>
          </CommentSpecification>
          <FeedbackTextarea placeholder='Feedback for the track...' />
        </div>
        <div>
          {mockFeedbackData.map((data) => (
            <FeedbackCardWrapper>
              <FeedbackCard
                description={data.description}
                timeRange={data.timeRange}
              />
            </FeedbackCardWrapper>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

const TimeInput = styled(Input)`
  max-width: ${rem(140)};
`;

const FeedbackCardWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.layout2};

  :last-child {
    margin-bottom: 0;
  }
`;

const CommentSpecification = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.layout3};
`;

const TimeRangeInputs = styled.div`
  display: flex;
  align-items: center;
`;

const SaveButtonWrapper = styled.div`
  margin-left: ${({ theme }) => theme.spacing.layout3};
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
