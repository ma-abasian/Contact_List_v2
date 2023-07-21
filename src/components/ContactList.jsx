import axios from "axios";
import { useEffect, useState } from "react";
import Contact from "./Contact.jsx";

const CONTACTS_API = "http://localhost:3000/contacts";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [isApiError, setIsApiError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getContacts = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(CONTACTS_API);
        setContacts(data);
        setIsLoading(false);
      } catch (error) {
        setIsApiError(true);
      }
    };

    getContacts();
  }, []);

  const handleDelete = async (contactId) => {
    try {
      await axios.delete(CONTACTS_API + `/${contactId}`);
      const newContacts = contacts.filter(({ id }) => id !== contactId);
      setContacts(newContacts);
    } catch (error) {
      alert("Can Not Delete Contact");
    }
  };

  if (isApiError) {
    return (
      <p className="text-center text-white text-2xl font-medium py-32 bg-red-500">
        Error: Data lost
      </p>
    );
  }

  if (isLoading) {
    return (
      <p className="text-center text-slate-900 text-2xl font-medium py-32 bg-green-200">
        LOADING.....
      </p>
    );
  }

  if (!contacts.length){
    console.log(contacts.length)
    return (
        <p className="text-center text-slate-900 text-2xl font-medium py-32 bg-blue-300">
          Your List is Empty
        </p>
    );
  }

  return contacts.map(({ id, name, number }) => (
    <Contact
      key={id}
      contactId={id}
      name={name}
      number={number}
      contactDelete={handleDelete}
    />
  ));
};

export default ContactList;
