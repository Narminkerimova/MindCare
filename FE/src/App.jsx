import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Layout from "./components/Layout";
import Home from "./pages/Home/index.jsx";
import Admin from "./pages/Admin/index.jsx"
import About from "./pages/About/index.jsx"
import Blog from "./pages/Blog/index.jsx"
import Quiz from "./pages/Quizler/index.jsx"
import DoctorDashboard from "./pages/DoctorDashboard/index.jsx"
import UserDashboard from "./pages/UserDashboard/index.jsx"
import LoginRegister from "./pages/Login-Register/index.jsx"
import NoPage from "./pages/No Page/index.jsx"
import Centers from "./pages/Centers/index.jsx";
import DoctorDetail from "./pages/DoctorDetail/index.jsx";

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
          <Route path="/doctordetail" element={<DoctorDetail />} />
          <Route path="/centers" element={<Centers />} />  {/* hazirdir */}
          <Route path="*" element={<NoPage />} />
        </Route>
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/doctordashboard" element={<DoctorDashboard />} />
          <Route path="/loginregister" element={<LoginRegister />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
