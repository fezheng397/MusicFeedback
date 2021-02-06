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

const TimestampFeedbackDetails: React.FC<FeedbackCardProps> = ({
  content,
  timeStart,
  timeEnd,
}) => {
  return (
    <Wrapper>
      <Header>
        <PlayButton>
          <Play size={20} />
        </PlayButton>
        <Label2 color='currentColor' marginLeft='spacing5'>
          Time: {timeStart}-{timeEnd}
        </Label2>
      </Header>
      <Paragraph2 color='currentColor'>{content}</Paragraph2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing8};
  border-radius: ${rem(12)};
  box-shadow: ${({ theme }) => theme.shadow.small.down};
  height: 100%;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.layout2};
`;

const PlayButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.text.primary};
  padding: ${({ theme }) => theme.spacing.spacing2};
`;

export default TimestampFeedbackDetails;
