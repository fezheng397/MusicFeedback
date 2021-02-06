import React from 'react';
import styled from 'styled-components';
import { Label2, Label4 } from 'components/Typography';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { Settings } from 'components/Icons';
import { Textarea } from 'components/Textarea';
import { rem } from 'polished';

const TimestampForm = () => {
  const a = '';
  return (
    <Wrapper>
      <Label2 marginBottom="layout1">Add or edit a comment:</Label2>
      <CommentSpecification>
        <TimeRangeInputs>
          <TimeInput placeholder="Time start..." />
          <Label4 marginRight="spacing3" marginLeft="spacing3">
            to
          </Label4>
          <TimeInput placeholder="Time end..." />
        </TimeRangeInputs>
        <SaveButtonWrapper>
          <Button buttonTheme="secondary" size="lg" icon={<Settings size={24} />}>
            Save
          </Button>
        </SaveButtonWrapper>
      </CommentSpecification>
      <FeedbackTextarea placeholder="Feedback for the track..." />
    </Wrapper>
  );
};

const FeedbackTextarea = styled(Textarea)`
  min-height: ${rem(250)};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TimeInput = styled(Input)`
  max-width: ${rem(140)};
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

export default TimestampForm;
