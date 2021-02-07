import React from 'react';
import { Header3 } from 'components/Typography';
import { FeedbackTextarea } from 'page-components/Review/styles';

type GeneralFeedbackProps = {};

const GeneralFeedback: React.FC<GeneralFeedbackProps> = () => {
  return (
    <div>
      <Header3 marginBottom="layout3">General feedback</Header3>
      <FeedbackTextarea placeholder="General feedback..." />
    </div>
  );
};

export default GeneralFeedback;
