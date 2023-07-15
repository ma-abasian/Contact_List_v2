import { Route, Routes } from "react-router-dom";
import { EditContact, Home, NewContact } from "./pages";
import Detail from "./pages/Detail.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-contact" element={<NewContact />} />
        <Route path="/edit-contact/:contactId" element={<EditContact />} />
        <Route path="/detail/:contactId" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
