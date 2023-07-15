import { Link } from "react-router-dom";

const Contact = ({ name, number, contactId, contactDelete }) => {
  return (
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
        <p>
          <button
            onClick={() => contactDelete(contactId)}
            className="bg-slate-400 font-medium rounded-md px-6 py-2 shadow-lg hover:bg-slate-300"
          >
            Delete
          </button>
        </p>
      </div>
    </div>
  );
};

export default Contact;
