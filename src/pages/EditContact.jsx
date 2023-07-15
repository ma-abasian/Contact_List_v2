import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import ContactForm from "../components/ContactForm.jsx";

const CONTACTS_API = "http://localhost:3000/contacts";

export const EditContact = () => {
  const [contact, setContact] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isApiError, setIsApiError] = useState(false);
  const { contactId } = useParams();
  const navigate = useNavigate();
  const { name, number } = contact;

  useEffect(() => {
    const getContacts = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(CONTACTS_API);
        const editContact = data.find(({ id }) => id === Number(contactId));
        setContact({ ...editContact });
        setIsLoading(false);
      } catch (error) {
        setIsApiError(true);
      }
    };
    getContacts();
  }, []);

  const handleEdit = async (contact) => {
    try {
      await axios.put(`${CONTACTS_API}/${contactId}`, contact);
      navigate("/");
    } catch (error) {
      alert("Can Not Edit Contact");
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

  return (
    <div>
      <div className="flex flex-col justify-between items-center bg-slate-100 shadow-lg px-2.5 py-2 mb-8 min-[460px]:flex-row min-[460px]:px-10 sm:py-5 md:px-16 lg:px-40 2xl:px-80">
        <h1 className="text-3xl text-center	font-bold py-0.5">Edit Contact</h1>
        <Link to="/">
          <button className="bg-slate-400 text-lg font-medium rounded-md px-6 py-2 shadow-lg hover:bg-slate-300">
            Contact List
          </button>
        </Link>
      </div>
      <div className="px-2.5 py-2 mb-28 min-[460px]:px-10 sm:py-5 md:px-16 lg:px-40 2xl:px-80">
        <div className="flex flex-col justify-between items-center  bg-slate-100 font-medium shadow-lg sm:flex-row mb-4 border-2 border-slate-500 rounded-lg p-4">
          <div className="mb-2 md:mb-0">
            <p className="mb-0.5">Name: {name}</p>
            <p>Phone Number: {number}</p>
          </div>
          <ContactForm
            contactName={name}
            contactNumber={number}
            onSubmit={handleEdit}
            title="Edit"
          />
        </div>
      </div>
    </div>
  );
};

export default EditContact;
