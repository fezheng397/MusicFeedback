import React from 'react';
import { Container } from 'components/Container';
import { GeneralFeedback, TimestampFeedback } from './';

const ReviewSection = () => {
  return (
    <Container size='lg'>
      <GeneralFeedback description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet pharetra justo at scelerisque. Nunc auctor elit tincidunt, rhoncus dui eget, aliquet nibh. Nulla neque est, pulvinar ut leo vitae, malesuada tincidunt nulla. Sed in quam a purus lacinia luctus. Phasellus non rutrum eros. Aenean mi ipsum, efficitur et semper non, accumsan quis leo. Etiam ut est eu diam consequat sodales. Cras lobortis consequat sem non varius.' />
      <TimestampFeedback />
    </Container>
  );
};

export default ReviewSection;