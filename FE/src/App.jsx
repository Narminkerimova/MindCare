import { BrowserRouter, Routes, Route } from "react-router";
import ScrollToTop from "./ScrollToTop.jsx";
import Layout from "./components/Layout";
import Home from "./pages/Home/index.jsx";
import Admin from "./pages/Admin/index.jsx";
import About from "./pages/About/index.jsx";
import Blog from "./pages/Blog/index.jsx";
import Quiz from "./pages/Quiz/index.jsx";
import DoctorDashboard from "./pages/DoctorDashboard/index.jsx";
import UserDashboard from "./pages/UserDashboard/index.jsx";
import LoginRegister from "./pages/Login-Register/index.jsx";
import NoPage from "./pages/No Page/index.jsx";
import Centers from "./pages/Centers/index.jsx";
import DoctorDetail from "./pages/DoctorDetail/index.jsx";
import Doctors from "./pages/Doctors/index.jsx";
import BlogDetail from "./pages/BlogDetail/index.jsx";
import QuizDetail from "./pages/QuizDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* hazirdir */}
          <Route path="/about" element={<About />} /> {/* hazirdir */}
          <Route path="/quiz" element={<Quiz />} /> {/* hazirdir */}
          <Route path="/blog" element={<Blog />} /> {/* hazirdir */}
          <Route path="/blogdetail" element={<BlogDetail />} /> {/* hazirdir */}
          <Route path="/quizdetail" element={<QuizDetail />} /> {/* hazirdir */}
          <Route path="/doctors" element={<Doctors />} /> {/* hazirdir */}
          <Route path="/doctordetail" element={<DoctorDetail />} />{" "}
          {/* hazirdir */}
          <Route path="/centers" element={<Centers />} /> {/* hazirdir */}
          <Route path="*" element={<NoPage />} /> {/* hazirdir */}
        </Route>
        <Route path="/userdashboard" element={<UserDashboard />} />{" "}
        {/* hazirdir */}
        <Route path="/admin" element={<Admin />} /> {/* hazirdir */}
        <Route path="/doctordashboard" element={<DoctorDashboard />} />{" "}
        {/* hazirdir */}
        <Route path="/loginregister" element={<LoginRegister />} />{" "}
        {/* hazirdir */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
