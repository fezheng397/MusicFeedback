import { Button } from './';
import styled from 'styled-components';
import { rem } from 'polished';

export const IconButton = styled(Button)`
  border-radius: 50%;
  padding: ${rem(8)};

  :hover {
    color: ${({ theme }) => theme.text.active};
    background: ${({ theme }) => theme.color.brand.light08};
  }
`;
