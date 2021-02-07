import React from 'react';
import styled from 'styled-components';
import { Header3, Label2, Paragraph2 } from 'components/Typography';
import { Input } from 'components/Input';

type StructuredFeedbackProps = {};

const StructuredFeedback: React.FC<StructuredFeedbackProps> = () => {
  return (
    <div>
      <Header3 marginBottom="layout3">Structured feedback</Header3>
      <Question>
        <Label2 marginBottom="layout1">
          Which well-known artist does this song remind you of most?
        </Label2>
        <Input placeholder="Artist name..." />
      </Question>
      <Question>
        <Label2 marginBottom="layout1">What was the best moment of the song?</Label2>
        <Input placeholder="Artist name..." />
      </Question>
      <Question>
        <Label2 marginBottom="layout1">What is your listening method?</Label2>
        <Input placeholder="Artist name..." />
      </Question>
      <Question>
        <Label2 marginBottom="layout1">What color do you associate this song with?</Label2>
        <Input placeholder="Artist name..." />
      </Question>
    </div>
  );
};

const Question = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.layout2};
`;

export default StructuredFeedback;
