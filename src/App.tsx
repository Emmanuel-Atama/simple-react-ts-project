import { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { CurrentUser } from './components/interface';
import FormInput from './components/FormInput';
import Header from './components/Header';
import UserList from './components/UserList';

function App() {
  const [contacts, setContacts] = useState<CurrentUser[]>([])
  console.log("contacts:", contacts)

  return (
    <Container className='mt-4'>
      <Header />
      <div className='d-flex mt-4'>
        <div className='mx-3'>
          <FormInput setContacts={setContacts} />
        </div>
        <UserList contacts={contacts} />
      </div>
    </Container>
  );
}

export default App;
