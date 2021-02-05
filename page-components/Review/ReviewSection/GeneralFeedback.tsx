import React from 'react';
import { Header3, Paragraph2 } from 'components/Typography';

type GeneralFeedbackProps = {
  description?: string;
};

const GeneralFeedback: React.FC<GeneralFeedbackProps> = ({ description }) => {
  return (
    <div>
      <Header3>General feedback</Header3>
      <Paragraph2>{description}</Paragraph2>
    </div>
  );
};

export default GeneralFeedback;
