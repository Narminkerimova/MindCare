import { BrowserRouter, Routes, Route, Navigate } from "react-router"; // Navigate-i əlavə edin
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
import BlogDetail from "./pages/BlogDetail";
import QuizDetail from "./pages/QuizDetail";
import MainProvider from "./context/MainProvider.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
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
            <Route path="/doctordetail/:id" element={<DoctorDetail />} />
            <Route path="/centers" element={<Centers />} />
            <Route path="*" element={<NoPage />} />
          </Route>

          <Route path="/loginregister" element={<LoginRegister />} />

          <Route
            path="/userdashboard"
            element={
              <ProtectedRoute allowedRoles={['user', 'doctor', 'admin', 'patient']}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctordashboard"
            element={
              <ProtectedRoute allowedRoles={['doctor', 'admin']}>
                <DoctorDashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/unauthorized" element={
            <Layout> 
              <div className="unauthorized-page-content" style={{ padding: '50px', textAlign: 'center' }}>
                <h2>403 - İcazəniz Yoxdur</h2>
                <p>Bu səhifəyə daxil olmaq üçün müvafiq icazəniz yoxdur.</p>
                <p>
                  <a href="/">Ana səhifəyə qayıt</a>
                </p>
              </div>
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;