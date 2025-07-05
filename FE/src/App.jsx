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
import MainProvider from "./context/MainProvider.jsx";
import "./App.css";

function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogdetail/:id" element={<BlogDetail />} />
            <Route path="/quizdetail/:id" element={<QuizDetail />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctordetail/:id" element={<DoctorDetail />} />{" "}
            <Route path="/centers" element={<Centers />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="/userdashboard" element={<UserDashboard />} />{" "}
          <Route path="/admin" element={<Admin />} />
          <Route path="/doctordashboard" element={<DoctorDashboard />} />{" "}
          <Route path="/loginregister" element={<LoginRegister />} />{" "}
        </Routes>
      </BrowserRouter>
      </MainProvider>
  );
}

export default App;
