import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { paragraph2 } from 'components/Typography';
import { rem } from 'polished';
import { Close } from 'components/Icons';
import { defaultFocusStyle } from 'utilities/keyboardFocus';
import { Button } from 'components/Button';

type InputProps = {
  autoComplete?: 'on' | 'off';
  autoFocus?: boolean;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  onChange?: (value?: string) => void;
  onClick?: (event?: React.MouseEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: (event?: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: () => void;
  onKeyPress?: () => void;
  onKeyUp?: () => void;
  onSelect?: () => void;
  onSubmit?: () => void;
  onClear?: () => void;
  pattern?: string;
  placeholder: string;
  readOnly?: boolean;
  required?: boolean;
  value?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      autoFocus,
      className,
      disabled,
      icon,
      onChange,
      onClear,
      pattern,
      placeholder,
      value,
      ...props
    },
    ref
  ) => {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      onChange && onChange(event.target.value);
    }
    return (
      <InputWrapper className={className}>
        <InputIconWrapper>{icon}</InputIconWrapper>
        <StyledInput
          disabled={disabled}
          onChange={handleChange}
          pattern={pattern}
          placeholder={placeholder}
          ref={ref}
          value={value}
          {...props}
        />
        <InputClearButton onClick={onClear} size='icon' buttonTheme='unstyled'>
          <Close size={16} />
        </InputClearButton>
      </InputWrapper>
    );
  }
);

const InputWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.background.primary};
    padding: ${rem(12)} ${rem(16)};
    border: ${rem(2)} solid ${theme.border.primary};
    border-radius: ${rem(10)};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: ${theme.text.secondary};
    transition: ${theme.transition.average};

    :focus-within {
      box-shadow: ${defaultFocusStyle}
      color: ${theme.text.active};
    }
  `}
`;

const InputIconWrapper = styled.div`
  color: currentColor;
  margin-right: ${rem(12)};
  display: flex;
`;

const InputClearButton = styled(Button)`
  padding: ${rem(4)};
  color: ${({ theme }) => theme.text.secondary};
`;

const StyledInput = styled.input`
  ${paragraph2}
  font-weight: 500;
  width: 100%;
  border: none;
`;

Input.displayName = 'Input';

export default Input;
