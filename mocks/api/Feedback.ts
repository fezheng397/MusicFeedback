import { Feedback } from 'types/16bars';

export const mockGeneralFeedback: Feedback = {
  id: 1,
  song_id: 1,
  reviewer_name: 'Felix',
  type: 'general',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet pharetra justo at scelerisque. Nunc auctor elit tincidunt, rhoncus dui eget, aliquet nibh. Nulla neque est, pulvinar ut leo vitae, malesuada tincidunt nulla. Sed in quam a purus lacinia luctus. Phasellus non rutrum eros. Aenean mi ipsum, efficitur et semper non, accumsan quis leo. Etiam ut est eu diam consequat sodales. Cras lobortis conseq uat sem non varius.',
  question: null,
  time_start: null,
  time_end: null,
};

export const mockTimestampFeedback: Feedback = {
  id: 1,
  song_id: 1,
  reviewer_name: 'Felix',
  type: 'timestamp',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet pharetra justo at scelerisque.',
  question: null,
  time_start: 105,
  time_end: 150,
};

export const mockTimestampFeedbacks: Feedback[] = [
  {
    id: 1,
    song_id: 1,
    reviewer_name: 'Felix',
    type: 'timestamp',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet pharetra justo at scelerisque.',
    question: null,
    time_start: 105,
    time_end: 150,
  },
  {
    id: 2,
    song_id: 1,
    reviewer_name: 'Felix',
    type: 'timestamp',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet pharetra justo at scelerisque.',
    question: null,
    time_start: 105,
    time_end: 150,
  },
  {
    id: 3,
    song_id: 1,
    reviewer_name: 'Felix',
    type: 'timestamp',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet pharetra justo at scelerisque.',
    question: null,
    time_start: 105,
    time_end: 150,
  },
];

export const mockStructuredFeedbacks: Feedback[] = [
  {
    id: 1,
    song_id: 1,
    reviewer_name: 'Felix',
    type: 'general',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet pharetra justo at scelerisque.',
    question: null,
    time_start: null,
    time_end: null,
  },
];
