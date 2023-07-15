import { Link } from "react-router-dom";
import ContactList from "../components/ContactList.jsx";

export const Home = () => {
  return (
    <div>
      <div className="flex flex-col justify-between items-center bg-slate-100 shadow-lg px-2.5 py-2 mb-8 min-[460px]:flex-row min-[460px]:px-10 sm:py-5 md:px-16 lg:px-40 2xl:px-80">
        <h1 className="text-3xl text-center	font-bold py-0.5">Contact List</h1>
        <Link to="/new-contact">
          <button className="bg-slate-400 text-lg font-medium rounded-md px-6 py-2 shadow-lg hover:bg-slate-300">
            Add Contact
          </button>
        </Link>
      </div>
      <div className="px-2.5 py-2 mb-28 min-[460px]:px-10 sm:py-5 md:px-16 lg:px-40 2xl:px-80">
        <ContactList />
      </div>
    </div>
  );
};

export default Home;
