import {
  mockGeneralFeedback,
  mockTimestampFeedbacks,
  mockStructuredFeedbacks,
} from 'mocks/api/Feedback';

export const mockReviews = [
  {
    song_id: 1,
    reviewer_name: 'Felix',
    general: mockGeneralFeedback,
    timestamp: mockTimestampFeedbacks,
    structured: mockStructuredFeedbacks,
  },
  {
    song_id: 1,
    reviewer_name: 'Aditya',
    general: mockGeneralFeedback,
    timestamp: mockTimestampFeedbacks,
    structured: mockStructuredFeedbacks,
  },
];
