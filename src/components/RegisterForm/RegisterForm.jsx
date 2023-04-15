import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit}>
      <StyledLabel>
        Username
        <StyledInput type="text" name="name" placeholder="Enter your name" />
      </StyledLabel>
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
      <StyledButton type="submit">Register</StyledButton>
    </StyledForm>
  );
};