import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CONTACTS_API = "http://localhost:3000/contacts";

const Detail = () => {
  const [contact, setContact] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isApiError, setIsApiError] = useState(false);
  const { contactId } = useParams();
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
        <h1 className="text-3xl text-center	font-bold py-0.5">Contact Detail</h1>
        <Link to="/">
          <button className="bg-slate-400 text-lg font-medium rounded-md px-6 py-2 shadow-lg hover:bg-slate-300">
            Contact List
          </button>
        </Link>
      </div>
      <div className="px-2.5 py-2 mb-28 min-[460px]:px-10 sm:py-5 md:px-16 lg:px-40 2xl:px-80">
        <div className="flex flex-col justify-between bg-slate-100 font-medium shadow-lg sm:flex-row mb-4 border-2 border-slate-500 rounded-lg p-4">
          <Link to={`/detail/${contactId}`}>
            <div className="mb-4 sm:mb-0">
              <p className="mb-0.5">Name: {name}</p>
              <p>Phone Number: {number}</p>
            </div>
          </Link>
          <div className="flex justify-evenly sm:justify-between items-center">
            <p>
              <Link to={`/edit-contact/${contactId}`}>
                <button className="bg-slate-400 font-medium rounded-md px-6 py-2 shadow-lg hover:bg-slate-300 mr-4">
                  Edit
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
