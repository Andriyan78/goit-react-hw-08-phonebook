import { useAuth } from 'hooks';
import { NavLinkStyle, StyledIcon, StyledNav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <StyledNav>
      <NavLinkStyle to="/">
        <StyledIcon />
      </NavLinkStyle>

      {isLoggedIn && <NavLinkStyle to="/contacts">Contacts</NavLinkStyle>}
    </StyledNav>
  );
};