export type FeedbackType = 'timestamp' | 'general' | 'structured';

export type Feedback = {
  id: number;
  song_id: number;
  reviewer_name?: string;
  type: FeedbackType;
  content: string;
  question?: string;
  time_start?: number; // Seconds
  time_end?: number; // Seconds
};
