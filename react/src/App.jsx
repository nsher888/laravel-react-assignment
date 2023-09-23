import "./App.css";
import { Route, Routes } from "react-router-dom";
import FormPage from "./components/Pages/FormPage";
import ListPage from "./components/Pages/ListPage";
import EditPage from "./components/Pages/EditPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/list/:id" element={<EditPage />} />
    </Routes>
  );
}

export default App;
