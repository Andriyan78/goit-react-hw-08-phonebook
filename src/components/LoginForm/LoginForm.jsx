import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit}>
      <StyledLabel>
        Email
        <StyledInput type="email" name="email" placeholder="Enter your email" />
      </StyledLabel>
      <StyledLabel>
        Password
        <StyledInput
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </StyledLabel>
      <StyledButton type="submit">Log In</StyledButton>
    </StyledForm>
  );
};