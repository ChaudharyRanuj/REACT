import { Home } from "./pages/Home";
import { AddContacts } from "./pages/AddContacts";
import { EditContacts } from "./pages/Edit";
import { Error404 } from "./pages/ErrorPage404";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useUser } from "./context/useUser";
import { Navbar } from "./components/Navbar";

// routes

function App() {
  const { users } = useUser();
  console.log(users);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContacts />} />
        <Route path="/edit" element={<EditContacts />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
