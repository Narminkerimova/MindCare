import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Layout from "./components/Layout";
import Home from "./pages/Home/index.jsx";
import Admin from "./pages/Admin/index.jsx"
import About from "./pages/About/index.jsx"
import Blog from "./pages/Blog/index.jsx"
import Quiz from "./pages/Quiz/index.jsx"
import DoctorDashboard from "./pages/DoctorDashboard/index.jsx"
import UserDashboard from "./pages/UserDashboard/index.jsx"
import LoginRegister from "./pages/Login-Register/index.jsx"
import NoPage from "./pages/No Page/index.jsx"
import Centers from "./pages/Centers/index.jsx";

function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* hazirdir */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/quiz" element={<Quiz />} />  {/* hazirdir */}
          <Route path="/blogs" element={<Blog />} />
          <Route path="/centers" element={<Centers />} />
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
