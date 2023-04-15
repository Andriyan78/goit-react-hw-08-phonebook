import { RegisterForm } from 'components/RegisterForm/RegisterForm';

import { Loader } from 'components/Loader/Loader';
import { useAuth } from 'hooks';
import {
  Container,
  Section,
  SectionStyle,
  SectionTitle,
} from './Register.styled';

const Register = () => {
  const { isLoading } = useAuth();
  return (
    <Container>
      <SectionStyle>
        <Section>
          <SectionTitle>Register</SectionTitle>
          {isLoading ? <Loader /> : <RegisterForm />}
        </Section>
      </SectionStyle>
    </Container>
  );
};

export default Register;