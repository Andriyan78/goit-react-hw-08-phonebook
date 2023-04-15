import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { SlBookOpen } from 'react-icons/sl';

export const NavLinkStyle = styled(NavLink)`
  padding-top: 16px;
  padding-bottom: 16px;
  color: white;
  font-size: 25px;
  font-weight: 600;
  text-decoration: none;
  transform: scale(1);
  transition: color 250ms ease-out, transform 250ms ease-out;
  &.active {
    color: #d1f16d;
  }
  &:hover,
  &:focus-visible {
    color: #d1f16d;
    transform: scale(1.1);
  }
`;

export const StyledIcon = styled(SlBookOpen)`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 15px;
  color: white;
  font-size: 60px;
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 55px;
  align-items: center;
`;