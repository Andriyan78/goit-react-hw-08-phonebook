import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

const {
  Container,

  SectionStyle,
  Section,
  SectionTitle,
} = require('../Contacts/Contacts.styled');

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <SectionStyle>
        <Section>
          <SectionTitle>Add contacts</SectionTitle>
          <ContactForm />
        </Section>
        <Section>
          <SectionTitle>Contacts</SectionTitle>

          <Filter />
          {isLoading && (
            <RotatingLines height="45" width="45" strokeColor="grey" />
          )}
          <ContactList />
        </Section>
      </SectionStyle>
    </Container>
  );
};
export default Contacts;