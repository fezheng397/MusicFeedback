import {
  mockGeneralFeedback,
  mockTimestampFeedback,
  mockStructuredFeedback,
} from 'mocks/api/Feedback';

export const mockReviews = [
  {
    song_id: 1,
    reviewer_name: 'Felix',
    general: mockGeneralFeedback,
    timestamp: mockTimestampFeedback,
    structured: mockStructuredFeedback,
  },
  {
    song_id: 1,
    reviewer_name: 'Aditya',
    general: mockGeneralFeedback,
    timestamp: mockTimestampFeedback,
    structured: mockStructuredFeedback,
  },
];
