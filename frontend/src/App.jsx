import { Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import ChatBot from "./pages/ChatBot";
import Result from "./pages/Result";
import Hero from "./pages/Hero";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/result" element={<Result />} />
      <Route path="/chatbot" element={<ChatBot />} />
    </Routes>
  );
}

export default App;