import React from 'react';
import { Header3, Paragraph2 } from 'components/Typography';

type GeneralFeedbackProps = {
  content?: string;
};

const GeneralFeedback: React.FC<GeneralFeedbackProps> = ({ content }) => {
  return (
    <div>
      <Header3 marginBottom="layout3">General feedback</Header3>
      <Paragraph2>{content}</Paragraph2>
    </div>
  );
};

export default GeneralFeedback;
