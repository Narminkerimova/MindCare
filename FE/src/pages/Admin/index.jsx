import { useState } from "react";
import "./style.css";
import {
  Users,
  UserCheck,
  Building2,
  FileText,
  BarChart3,
  Menu,
  X,
  Plus,
} from "lucide-react";
import DoctorTable from "./DoctorTable";
import PatientTable from "./PatientTable";
import CenterTable from "./CenterTable";
import QuizTable from "./QuizTable";
import ArticleTable from "./ArticleTable";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("hekim");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [hekimler] = useState([
    { id: 1, ad: "Dr. Əli Məmmədov", ixtisas: "Klinik Psixoloq", telefon: "+994 50 123 45 67", email: "ali@mindcare.az" },
    { id: 2, ad: "Dr. Leyla Əhmədova", ixtisas: "Uşaq Psixoloqu", telefon: "+994 51 234 56 78", email: "leyla@mindcare.az" },
    { id: 3, ad: "Dr. Rəşad Qasımov", ixtisas: "Psixoterapevt", telefon: "+994 55 345 67 89", email: "resad@mindcare.az" },
  ]);

  const [pasiyentler] = useState([
    { id: 1, ad: "Arzu Həsənova", yas: 28, telefon: "+994 50 987 65 43", hekim: "Dr. Əli Məmmədov", sonSeans: "2025-06-28" },
    { id: 2, ad: "Elçin Məmmədli", yas: 35, telefon: "+994 51 876 54 32", hekim: "Dr. Leyla Əhmədova", sonSeans: "2025-06-30" },
    { id: 3, ad: "Nigar Əliyeva", yas: 22, telefon: "+994 55 765 43 21", hekim: "Dr. Rəşad Qasımov", sonSeans: "2025-07-01" },
  ]);

  const [merkezler] = useState([
    { id: 1, ad: "MindCare Mərkəzi - Nəsimi", unvan: "Bakı, Nəsimi rayonu, Azadlıq prospekti 12", telefon: "+994 12 456 78 90" },
    { id: 2, ad: "MindCare Mərkəzi - Nərimanov", unvan: "Bakı, Nərimanov rayonu, Təbriz küçəsi 45", telefon: "+994 12 567 89 01" },
  ]);

  const [quizler] = useState([
    { id: 1, ad: "Stress Səviyyəsi Testi", pasiyent: "Arzu Həsənova", netice: "65/100", tarix: "2025-06-25", status: "Orta" },
    { id: 2, ad: "Anksiyete Qiymətləndirməsi", pasiyent: "Elçin Məmmədli", netice: "45/100", tarix: "2025-06-26", status: "Aşağı" },
    { id: 3, ad: "Depressiya Skalası", pasiyent: "Nigar Əliyeva", netice: "80/100", tarix: "2025-06-27", status: "Yüksək" },
  ]);

  const [meqaleler] = useState([
    { id: 1, basliq: "Stress idarəetmə üsulları", muellif: "Dr. Əli Məmmədov", tarix: "2025-06-20", status: "Dərc edilib" },
    { id: 2, basliq: "Uşaqlarda anksiyete əlamətləri", muellif: "Dr. Leyla Əhmədova", tarix: "2025-06-22", status: "Gözləmədə" },
    { id: 3, basliq: "Ailə terapiyasının faydaları", muellif: "Dr. Rəşad Qasımov", tarix: "2025-06-24", status: "Dərc edilib" },
  ]);

  const menuItems = [
    { id: "hekim", label: "Həkimlər", icon: UserCheck },
    { id: "pasiyent", label: "Pasiyentlər", icon: Users },
    { id: "merkez", label: "Mərkəzlər", icon: Building2 },
    { id: "quiz", label: "Quiz Nəticələri", icon: BarChart3 },
    { id: "meqale", label: "Məqalələr", icon: FileText },
  ];

  const renderTable = () => {
    switch (activeTab) {
      case "hekim":
        return <DoctorTable hekimler={hekimler} />;
      case "pasiyent":
        return <PatientTable pasiyentler={pasiyentler} />;
      case "merkez":
        return <CenterTable merkezler={merkezler} />;
      case "quiz":
        return <QuizTable quizler={quizler} />;
      case "meqale":
        return <ArticleTable meqaleler={meqaleler} />;
      default:
        return null;
    }
  };

  return (
    <div className="admin-panel">
      <div className={`sidebar ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
        <div className="sidebar-header">
          <div className="sidebar-header-content">
            {sidebarOpen && <h1 className="sidebar-title">MindCare</h1>}
            <button
              className="sidebar-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`nav-item ${isActive ? "nav-item-active" : ""}`}
              >
                <IconComponent size={20} />
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="main-content">
        <header className="main-header">
          <div className="main-header-content">
            <div className="main-header-left">
              <div className="brand-container">
                <div className="brand-logo">
                  <span className="brand-logo-text">MC</span>
                </div>
              </div>
              <div className="brand-info">
                <h1 className="brand-title">MindCare</h1>
                <p className="brand-subtitle">Admin Panel</p>
              </div>
            </div>
            <div className="user-info">
              <p className="user-welcome">Xoş gəlmisiniz!</p>
              <p className="user-role">Administrator</p>
            </div>
          </div>
        </header>

        <main className="main-body">
          <div className="content-card">
            <div className="content-header">
              <h2 className="content-title">
                {menuItems.find((item) => item.id === activeTab)?.label}
              </h2>
              <button className="header-add-button">
                <Plus size={16} />
                Yeni{" "}
                {menuItems.find((item) => item.id === activeTab)?.label.slice(0, -1) || "Məlumat"}
              </button>
            </div>
            <div className="content-body">{renderTable()}</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
