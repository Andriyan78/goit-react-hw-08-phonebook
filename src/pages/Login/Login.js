import { Loader } from 'components/Loader/Loader';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useAuth } from 'hooks';
import { Container, Section, SectionStyle, SectionTitle } from './Login.styled';

const Login = () => {
  const { isLoading } = useAuth();

  return (
    <Container>
      <SectionStyle>
        <Section>
          <SectionTitle>Log in</SectionTitle>
          {isLoading ? <Loader /> : <LoginForm />}
        </Section>
      </SectionStyle>
    </Container>
  );
};

export default Login;