import React from 'react';
import styled from 'styled-components';
import { Header3, Label2, Label4, Paragraph2 } from 'components/Typography';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { Settings } from 'components/Icons';
import { Textarea } from 'components/Textarea';
import { rem } from 'polished';

type TimestampFeedbackProps = {};

const TimestampFeedback: React.FC<TimestampFeedbackProps> = ({}) => {
  return (
    <div>
      <Header3 marginBottom='layout2'>Timestamp feedback</Header3>
      <Label2 marginBottom='layout1'>Add or edit a comment:</Label2>
      <CommentSpecification>
        <TimeInput placeholder='Time start...' />

        <Label4 marginRight='spacing3' marginLeft='spacing3'>
          to
        </Label4>
        <TimeInput placeholder='Time end...' />
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
      <Textarea placeholder='Feedback for the track...' />
    </div>
  );
};

const TimeInput = styled(Input)`
  max-width: ${rem(140)};
`;

const CommentSpecification = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.layout3};
`;

const SaveButtonWrapper = styled.div`
  margin-left: ${({ theme }) => theme.spacing.layout2};
`;

export default TimestampFeedback;
