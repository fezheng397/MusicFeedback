import React from 'react';
import styled from 'styled-components';
import { Label2, Paragraph2 } from 'components/Typography';
import { Play } from 'components/Icons';
import { rem } from 'polished';

type FeedbackCardProps = {
  content: string;
  timeStart: number;
  timeEnd: number;
};

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  content,
  timeStart,
  timeEnd,
}) => {
  return (
    <Wrapper>
      <PlayButton>
        <Play size={20} />
      </PlayButton>
      <FeedbackSection>
        <Label2 color='currentColor' marginBottom='spacing2'>
          Time: {timeStart}-{timeEnd}
        </Label2>
        <Paragraph2 color='currentColor'>{content}</Paragraph2>
      </FeedbackSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.layout2};
  border-radius: ${rem(12)};
  box-shadow: ${({ theme }) => theme.shadow.small.down};
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.text.active};
    box-shadow: ${({ theme }) => theme.shadow.medium.down};
  }
`;

const FeedbackSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing.layout2};
`;

const PlayButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.text.primary};
  padding: ${({ theme }) => theme.spacing.spacing2};
`;

export default FeedbackCard;
