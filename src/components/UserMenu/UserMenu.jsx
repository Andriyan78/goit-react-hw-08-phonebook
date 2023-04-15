import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { StyledButton, StyledDiv, StyledText } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <StyledDiv>
      <StyledText>Welcome, {user.name}!</StyledText>
      <StyledButton type="button" onClick={handleLogOut}>
        LogOut
      </StyledButton>
    </StyledDiv>
  );
};