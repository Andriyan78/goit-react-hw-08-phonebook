import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const StyledNavLink = styled(NavLink)`
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

export const StyledDiv = styled.div`
  display: flex;
  gap: 20px;
  padding: 15px;
`;