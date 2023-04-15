import { ContactItems } from 'components/ContactItems/ContactItems';
import { List } from './ContactList.styled';
import { selectfilteredContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const filteredContacts = useSelector(selectfilteredContacts);

  return (
    <>
      <List>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactItems key={id} id={id} name={name} number={number} />
        ))}
      </List>
    </>
  );
};