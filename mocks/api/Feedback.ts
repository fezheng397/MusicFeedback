import { Feedback } from 'types/16bars';

export const mockGeneralFeedback: Feedback = {
  id: 1,
  song_id: 1,
  reviewer_name: 'Felix',
  type: 'general',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet pharetra justo at scelerisque.',
  question: null,
  time_start: null,
  time_end: null,
};

export const mockTimestampFeedback: Feedback[] = [
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

export const mockStructuredFeedback: Feedback[] = [
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
