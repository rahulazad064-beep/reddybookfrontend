import { BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";
import Home from './pages/home'
import UserData from "./pages/userdata";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<UserData />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
