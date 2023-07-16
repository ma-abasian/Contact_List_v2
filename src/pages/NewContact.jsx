import { Link, useNavigate } from "react-router-dom";
import ContactForm from "../components/ContactForm.jsx";
import axios from "axios";

const CONTACTS_API = "http://localhost:3000/contacts";

export const NewContact = () => {
  const navigate = useNavigate();

  const handleAdd = async (contact) => {
    try {
      await axios.post(CONTACTS_API, contact);
      navigate("/");
    } catch (error) {
      alert("Can Not Add Contact");
    }
  };
  return (
    <div>
      <div className="flex flex-col justify-between bg-slate-100 shadow-lg px-2.5 py-2 mb-8 min-[460px]:flex-row min-[460px]:px-10 sm:py-5 md:px-16 lg:px-40 2xl:px-80">
        <h1 className="text-3xl text-center	font-bold py-0.5">
          Add New Contact
        </h1>
        <Link to="/">
          <button className="bg-slate-400 text-lg font-medium rounded-md px-6 py-2 shadow-lg hover:bg-slate-300">
            Contact List
          </button>
        </Link>
      </div>
      <div className="px-2.5 py-2 mb-28 min-[460px]:px-10 sm:py-5 md:px-16 lg:px-40 2xl:px-80">
        <div className="flex flex-col justify-between items-center  bg-slate-100 font-medium shadow-lg md:flex-row mb-4 border-2 border-slate-500 rounded-lg p-4">
          <ContactForm onSubmit={handleAdd} title="Add" />
        </div>
      </div>
    </div>
  );
};

export default NewContact;
