import styled from 'styled-components';
import { Textarea } from 'components/Textarea';
import { rem } from 'polished';

export const FeedbackTextarea = styled(Textarea)`
  min-height: ${rem(250)};
`;
