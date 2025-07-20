import React, { useState, useEffect, useContext } from 'react';
import { X, Save } from 'lucide-react';
import { AdminDataContext } from '../../../context/AdminProvider.jsx';
import { ModalContext } from '../../../context/ModalProvider.jsx';
import './../modal.css'


function PatientFormModal({ isOpen, onClose, modalType, initialData }) {
  const { addItem, updateItem} = useContext(AdminDataContext);
  const [formData, setFormData] = useState({
    fullName: '',
    doctor: '', 
    notes: '',
  });
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  useEffect(() => {
    if (initialData && (modalType === 'edit' || modalType === 'view')) {
      setFormData({
        fullName: initialData.fullName || '',
        doctor: initialData.doctor || '',
        notes: initialData.notes || '',
      });
    } else {
      setFormData({
        fullName: '',
        doctor: '',
        notes: '',
      });
    }
    setFormError('');
  }, [initialData, modalType, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setIsSubmitting(true);

    if (!formData.fullName) {
      setFormError('Ad Soyad sahəsi boş ola bilməz.');
      setIsSubmitting(false);
      return;
    }

    let result;
    if (modalType === 'add') {
      result = await addItem('patient', formData);
    } else if (modalType === 'edit') {
      result = await updateItem('patient', initialData._id, formData);
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
            {isViewMode ? 'Pasiyentə Baxış' : (modalType === 'edit' ? 'Pasiyenti Redaktə Et' : 'Yeni Pasiyent Əlavə Et')}
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
              <label htmlFor="fullName" className="form-label">Ad Soyad:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="form-input"
                placeholder="Pasiyentin adını daxil edin"
                disabled={isViewMode}
              />
            </div>
            <div className="form-group">
              <label htmlFor="doctor" className="form-label">Həkim (ID):</label>
              {/* Gələcəkdə bu, həkimlərin dropdown siyahısı ola bilər */}
              <input
                type="text"
                id="doctor"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="form-input"
                placeholder="Həkimin ID-sini daxil edin"
                disabled={isViewMode}
              />
            </div>
            <div className="form-group">
              <label htmlFor="notes" className="form-label">Qeydlər:</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="form-input"
                rows="3"
                placeholder="Pasiyent haqqında qeydlər"
                disabled={isViewMode}
              ></textarea>
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

export default PatientFormModal;