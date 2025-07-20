import { useState, useContext } from 'react';
import "./style.css";
import {
  Users, UserCheck, Building2, FileText, BarChart3, Menu, X, Plus
} from "lucide-react";
import { AdminDataContext } from "./../../context/AdminProvider.jsx";
import { ModalContext, ModalProvider } from "./../../context/ModalProvider.jsx"; 
import DoctorTable from "./DoctorTable";
import PatientTable from "./PatientTable";
import CenterTable from "./CenterTable";
import QuizTable from "./QuizTable";
import ArticleTable from "./ArticleTable";
import DoctorFormModal from './DoctorTable/DoctorFormModal.jsx';
import PatientFormModal from './PatientTable/PatientFormModal.jsx';
import CenterFormModal from './CenterTable/CenterFormModal.jsx';
import QuizFormModal from './QuizTable/QuizFormModal.jsx';
import ArticleFormModal from './ArticleTable/ArticleFormModal.jsx';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("hekim");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { loading } = useContext(AdminDataContext);
  const { isOpen, modalType, currentItem, currentTable, openModal, closeModal } = useContext(ModalContext);

  const menuItems = [
    { id: "hekim", label: "Həkimlər", icon: UserCheck },
    { id: "pasiyent", label: "Pasiyentlər", icon: Users },
    { id: "merkez", label: "Mərkəzlər", icon: Building2 },
    { id: "quiz", label: "Quiz Nəticələri", icon: BarChart3 },
    { id: "meqale", label: "Məqalələr", icon: FileText },
  ];

  const renderTable = () => {
    if (loading) {
      return (
        <p className="text-center text-gray-600">Məlumatlar yüklənir...</p>
      );
    }

    switch (activeTab) {
      case "hekim":
        return <DoctorTable />;
      case "pasiyent":
        return <PatientTable />;
      case "merkez":
        return <CenterTable />;
      case "quiz":
        return <QuizTable />;
      case "meqale":
        return <ArticleTable />;
      default:
        return null;
    }
  };

  const handleAddClick = () => {
    const tableMap = {
      hekim: 'doctor',
      pasiyent: 'patient',
      merkez: 'center',
      quiz: 'quiz',
      meqale: 'article'
    };
    openModal('add', tableMap[activeTab]);
  };

  return (
    <>
      <title>MindCare: Admin</title>
      <div className="admin-panel">
        <div
          className={`sidebar ${
            sidebarOpen ? "sidebar-open" : "sidebar-closed"
          }`}
        >
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
                <button className="header-add-button" onClick={handleAddClick}>
                  <Plus size={16} />
                  Yeni{" "}
                  {menuItems
                    .find((item) => item.id === activeTab)
                    ?.label.slice(0, -1) || "Məlumat"}
                </button>
              </div>
              <div className="content-body">{renderTable()}</div>
            </div>
          </main>
        </div>
      </div>

      {isOpen && currentTable === 'doctor' && (modalType === 'add' || modalType === 'edit' || modalType === 'view') && (
        <DoctorFormModal
          isOpen={isOpen}
          onClose={closeModal}
          modalType={modalType}
          initialData={currentItem}
        />
      )}
      {isOpen && currentTable === 'patient' && (modalType === 'add' || modalType === 'edit' || modalType === 'view') && (
        <PatientFormModal
          isOpen={isOpen}
          onClose={closeModal}
          modalType={modalType}
          initialData={currentItem}
        />
      )}
      {isOpen && currentTable === 'center' && (modalType === 'add' || modalType === 'edit' || modalType === 'view') && (
        <CenterFormModal
          isOpen={isOpen}
          onClose={closeModal}
          modalType={modalType}
          initialData={currentItem}
        />
      )}
      {isOpen && currentTable === 'quiz' && (modalType === 'add' || modalType === 'edit' || modalType === 'view') && (
        <QuizFormModal
          isOpen={isOpen}
          onClose={closeModal}
          modalType={modalType}
          initialData={currentItem}
        />
      )}
      {isOpen && currentTable === 'article' && (modalType === 'add' || modalType === 'edit' || modalType === 'view') && (
        <ArticleFormModal
          isOpen={isOpen}
          onClose={closeModal}
          modalType={modalType}
          initialData={currentItem}
        />
      )}

    </>
  );
};

const AdminPanelWrapper = () => (
  <ModalProvider>
    <AdminPanel />
  </ModalProvider>
);

export default AdminPanelWrapper; 