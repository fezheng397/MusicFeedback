import React from 'react';
import styled, { css } from 'styled-components';
import { Container } from 'components/Container';
import { rem } from 'polished';
import { Logo, Wordmark, LogoFull } from 'components/Icons';
import { Button } from 'components/Button';
import { setUser } from 'redux/actions/auth';
import { useUser } from 'redux/selectors/user';
import { AccountDropdown } from './components';

type NavbarProps = { transparent?: boolean };

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const { user, loading } = useUser();

  return (
    <NavContainer transparent={transparent}>
      <ContentWrapper size='lg'>
        <LogoContainer
          transparent={transparent}
          href='/'
          size='link'
          buttonTheme='link'
        >
          <LogoFull size={140} />
        </LogoContainer>
        {user && <AccountDropdown />}
      </ContentWrapper>
    </NavContainer>
  );
};

type IsTransparent = {
  transparent: boolean;
};

const NavContainer = styled.div<IsTransparent>`
  position: relative;
  height: ${rem(72)};
  box-shadow: ${({ theme }) => theme.shadow.small.down};
  z-index: 1000;

  ${({ transparent }) =>
    transparent &&
    css`
      background: transparent;
    `}
`;

const ContentWrapper = styled(Container)`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

const LogoContainer = styled(Button)<IsTransparent>`
  display: flex;
  align-items: center;

  ${({ theme, transparent }) =>
    transparent &&
    css`
      color: ${theme.text.alt.primary};

      :hover {
        color: ${theme.text.alt.primary};
      }
    `}
`;

const StyledWordmark = styled(Wordmark)`
  padding-left: ${rem(12)};
`;

export default Navbar;
