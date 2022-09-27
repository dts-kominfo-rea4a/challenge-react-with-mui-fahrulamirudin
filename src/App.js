import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Grid } from '@mui/material';
import React, { useState } from 'react';

import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import Header from './components/Header';
// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = useState(contactsJSON);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="App">
      <Header />
      <Grid justifyContent="center" container spacing={2}>
        <Grid item md={6} lg={6}>
          <ContactForm handleClick={addContact} />
        </Grid>
        <Grid item md={6} lg={6}>
          {contacts.map((contact, index) => (
            <Contact key={index} data={contact} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;