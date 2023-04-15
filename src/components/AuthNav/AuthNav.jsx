import { StyledDiv, StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <StyledDiv>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">LogIn</StyledNavLink>
    </StyledDiv>
  );
};