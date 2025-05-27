import { BrowserRouter, Route, Routes } from "react-router-dom";
//import style from "./App.module.scss";
import Plug from "./components/Plug/Plug.tsx";
import Chat from "./components/Chat/Chat.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Plug />} />
        <Route path="/:id" element={<Chat/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
