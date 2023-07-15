import { useState } from "react";

const ContactForm = ({
  onSubmit,
  contactName = "",
  contactNumber = "",
  title,
}) => {
  const [contact, setContact] = useState({
    name: contactName,
    number: contactNumber,
  });
  const { name, number } = contact;

  const handleChange = ({ target }) => {
    setContact({ ...contact, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !number.trim()) {
      alert("All fields are required");
      return null;
    }

    onSubmit(contact);
    setContact({ name: "", number: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
        <div>
          <input
            className="mr-4 border-2 w-full md:mb-0 mb-2 border-slate-500 md:w-64 bg-slate-100 text-black placeholder-slate-500 rounded-md px-2 py-1.5"
            placeholder="name"
            value={contact.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="mr-4 border-2 w-full border-slate-500 md:mb-0 mb-2 md:w-64 bg-slate-100 text-black placeholder-slate-500 rounded-md px-2 py-1.5"
            placeholder="Phome Number"
            value={number}
            name="number"
            onChange={handleChange}
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-slate-400 w-full font-medium rounded-md px-6 py-2 md:mb-0 mb-2 shadow-lg hover:bg-slate-300"
          >
            {title}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
