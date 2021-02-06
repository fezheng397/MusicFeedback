import React from 'react';
import styled, { css } from 'styled-components';
import { defaultFocusStyle } from 'utilities/keyboardFocus';
import { paragraph2 } from 'components/Typography';
import { rem } from 'polished';

type TextareaProps = {
  className?: string;
  onChange?: (value?: string) => void;
  placeholder?: string;
  value?: string;
};

const Textarea: React.FC<TextareaProps> = ({
  className,
  onChange,
  placeholder,
  value,
}) => {
  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    onChange && onChange(event.target.value);
  }

  return (
    <TextareaWrapper>
      <MainTextarea
        className={className}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
    </TextareaWrapper>
  );
};

const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
`;

const MainTextarea = styled.textarea`
  ${({ theme }) => css`
    ${paragraph2}
    width: 100%;
    background: ${theme.background.primary};
    padding: ${theme.spacing.spacing4} ${theme.spacing.spacing5};
    border: ${theme.spacing.spacing1} solid ${theme.border.primary};
    border-radius: ${rem(10)};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: ${theme.text.primary};
    transition: ${theme.transition.average};
    font-weight: 500;

    :focus {
      box-shadow: ${defaultFocusStyle};
    }
  `}
`;

export default Textarea;
