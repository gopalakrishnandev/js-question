import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/create";
import "./App.css";
import Edit from "./pages/edit";
import NewTable from "./pages/newTable";
import QuestionForm from "./pages/questionForm";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          {/* <Route path="create" element={<Create />} /> */}
          <Route path="/newTable" element={<NewTable />} />

          <Route path="/update/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
