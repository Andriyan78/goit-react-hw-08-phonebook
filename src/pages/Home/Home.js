import { useAuth } from 'hooks';
import { Image, StyledDiv, Title } from './Home.styled';
import phonebook from '../../images/phonebook.jpg';

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <main>
      <StyledDiv>
        {isLoggedIn ? (
          <Title>Welcome to Phonebook! Save your contacts with pleasure!</Title>
        ) : (
          <Title>Welcome to Phonebook!To get started, please log in!</Title>
        )}
        <Image src={phonebook} alt="phonebook" />
      </StyledDiv>
    </main>
  );
};

export default Home;