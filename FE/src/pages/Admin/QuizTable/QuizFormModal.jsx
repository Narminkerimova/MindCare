import React, { useState, useEffect, useContext } from 'react';
import { X, Save } from 'lucide-react';
import { AdminDataContext } from '../../../context/AdminProvider.jsx';
import { ModalContext } from '../../../context/ModalProvider.jsx';
import './../modal.css'


function QuizFormModal({ isOpen, onClose, modalType, initialData }) {
  const { addItem, updateItem} = useContext(AdminDataContext);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    timeLimit: 0,
    questionCount: 0,
  });
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialData && (modalType === 'edit' || modalType === 'view')) {
      setFormData({
        title: initialData.title || '',
        category: initialData.category || '',
        description: initialData.description || '',
        timeLimit: initialData.timeLimit || 0,
        questionCount: initialData.questionCount || 0,
      });
    } else {
      setFormData({
        title: '',
        category: '',
        description: '',
        timeLimit: 0,
        questionCount: 0,
      });
    }
    setFormError('');
  }, [initialData, modalType, isOpen]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setIsSubmitting(true);

    if (!formData.title || !formData.category || !formData.timeLimit || !formData.questionCount) {
      setFormError('Başlıq, Kateqoriya, Vaxt Limiti və Sual Sayı sahələri tələb olunur.');
      setIsSubmitting(false);
      return;
    }
    if (isNaN(formData.timeLimit) || formData.timeLimit <= 0) {
      setFormError('Vaxt Limiti düzgün müsbət rəqəm olmalıdır.');
      setIsSubmitting(false);
      return;
    }
    if (isNaN(formData.questionCount) || formData.questionCount <= 0) {
      setFormError('Sual Sayı düzgün müsbət rəqəm olmalıdır.');
      setIsSubmitting(false);
      return;
    }

    let result;
    if (modalType === 'add') {
      result = await addItem('quiz', formData); 
    } else if (modalType === 'edit') {
      result = await updateItem('quiz', initialData._id, formData);
    }

    if (result && result.success) {
      onClose();
    } else {
      setFormError(result.error || 'Əməliyyat uğursuz oldu.');
    }
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  const isViewMode = modalType === 'view';

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">
            {isViewMode ? 'Quizə Baxış' : (modalType === 'edit' ? 'Quizi Redaktə Et' : 'Yeni Quiz Əlavə Et')}
          </h2>
          <button onClick={onClose} className="modal-close" title="Bağla">
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          {formError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <strong className="font-bold">Xəta!</strong>
              <span className="block sm:inline"> {formError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-group">
              <label htmlFor="title" className="form-label">Quiz Adı:</label>
              <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="form-input" placeholder="Quiz adını daxil edin" disabled={isViewMode} />
            </div>
            <div className="form-group">
              <label htmlFor="category" className="form-label">Kateqoriya:</label>
              <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} className="form-input" placeholder="Məsələn: Stress Testi" disabled={isViewMode} />
            </div>
            <div className="form-group">
              <label htmlFor="description" className="form-label">Açıqlama:</label>
              <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="form-input" rows="3" placeholder="Quiz haqqında qısa açıqlama" disabled={isViewMode}></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="timeLimit" className="form-label">Vaxt Limiti (dəqiqə):</label>
              <input type="number" id="timeLimit" name="timeLimit" value={formData.timeLimit} onChange={handleChange} className="form-input" placeholder="Dəqiqə ilə vaxt limiti" disabled={isViewMode} />
            </div>
            <div className="form-group">
              <label htmlFor="questionCount" className="form-label">Sual Sayı:</label>
              <input type="number" id="questionCount" name="questionCount" value={formData.questionCount} onChange={handleChange} className="form-input" placeholder="Sual sayı" disabled={isViewMode} />
            </div>

            {!isViewMode && (
              <div className="modal-actions">
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  <Save size={16} className="mr-2" />
                  {isSubmitting ? 'Göndərilir...' : (modalType === 'add' ? 'Əlavə Et' : 'Yadda Saxla')}
                </button>
              </div>
            )}
            {isViewMode && (
              <div className="modal-actions">
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                  Bağla
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default QuizFormModal;