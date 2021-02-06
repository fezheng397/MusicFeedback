import React from 'react';
import styled, { css } from 'styled-components';
import { Button } from 'components/Button';
import { Header6 } from 'components/Typography';
import { rem } from 'polished';
import { RenderPopover, RenderToggle, Popover } from 'components/Popover';
import { useUser } from 'redux/selectors/user';

const links = [
  {
    key: 'account-artists',
    displayName: 'Artists',
    url: '/account/artists',
  },
  {
    key: 'sign-out',
    displayName: 'Sign Out',
    url: '/sign-out',
  },
];

const AccountDropdown = () => {
  const { user } = useUser();
  const renderToggle: RenderToggle = (toggleActive, ref) => {
    return (
      <ProfileButton
        onClick={toggleActive}
        ref={ref}
        buttonTheme='unstyled'
        size='link'
      >
        <ProfileImage src={user.image_url} />
        <Header6 marginLeft='spacing3'>{user.first_name}</Header6>
      </ProfileButton>
    );
  };

  const renderPopover: RenderPopover = (toggleActive) => {
    return (
      <div>
        {links.map((link) => (
          <DropdownButton
            key={link.key}
            href={link.url}
            buttonTheme='link'
            size='md'
          >
            {link.displayName}
          </DropdownButton>
        ))}
      </div>
    );
  };
  return (
    <Popover
      offset={[0, 20]}
      placement='bottom'
      renderPopover={renderPopover}
      renderToggle={renderToggle}
    />
  );
};

const ProfileButton = styled(Button)`
  box-shadow: ${({ theme }) => theme.shadow.small.down};
  ${({ theme }) =>
    css`
      padding: ${theme.spacing.spacing3} ${theme.spacing.spacing5}
        ${theme.spacing.spacing3} ${theme.spacing.spacing3};
    `};
  border-radius: ${rem(500)};
`;

const ProfileImage = styled.img`
  width: ${rem(32)};
  height: ${rem(32)};
  border-radius: 50%;
`;

const DropdownButton = styled(Button)`
  text-align: left;
  justify-content: flex-start;
`;

export default AccountDropdown;
