import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Layout from "./components/Layout";
import Home from "./pages/Home/index.jsx";
import Admin from "./pages/Admin/index.jsx"
import Quiz from "./pages/Quiz/index.jsx"
import DoctorDashboard from "./pages/DoctorDashboard/index.jsx"
import UserDashboard from "./pages/UserDashboard/index.jsx"
import LoginRegister from "./pages/Login-Register/index.jsx"
import NoPage from "./pages/No Page/index.jsx"

function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/doctordashboard" element={<DoctorDashboard />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/loginregister" element={<LoginRegister />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
