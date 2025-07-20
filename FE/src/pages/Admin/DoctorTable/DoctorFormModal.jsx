import React, { useState, useEffect, useContext } from 'react';
import { X, Save } from 'lucide-react';
import { AdminDataContext } from '../../../context/AdminProvider.jsx';
import { ModalContext } from '../../../context/ModalProvider.jsx';
import './../modal.css';

function DoctorFormModal({ isOpen, onClose, modalType, initialData }) {
  const { addItem, updateItem } = useContext(AdminDataContext);
  const [formData, setFormData] = useState({
    fullName: '',
    position: '',
    phone: '',
    email: '',
    appointmentPrice: '',
    workplace: '',
    userId: ''
  });
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialData && (modalType === 'edit' || modalType === 'view')) {
      setFormData({
        fullName: initialData.fullName || '',
        position: initialData.position || '',
        phone: initialData.phone || '',
        email: initialData.email || '',
        appointmentPrice: initialData.appointmentPrice || '',
        workplace: initialData.workplace || '',
        userId: initialData.userId || ''
      });
    } else {
      setFormData({
        fullName: '',
        position: '',
        phone: '',
        email: '',
        appointmentPrice: '',
        workplace: '',
        userId: ''
      });
    }
    setFormError('');
  }, [initialData, modalType, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setIsSubmitting(true);

    if (!formData.fullName || !formData.position || !formData.email || !formData.appointmentPrice || !formData.workplace || !formData.userId) {
      setFormError('Zəhmət olmasa bütün tələb olunan sahələri doldurun.');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Düzgün email formatı daxil edin.');
      setIsSubmitting(false);
      return;
    }

    let result;
    if (modalType === 'add') {
      result = await addItem('doctor', formData);
    } else if (modalType === 'edit') {
      result = await updateItem('doctor', initialData._id, formData);
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
            {isViewMode ? 'Həkimə Baxış' : (modalType === 'edit' ? 'Həkimi Redaktə Et' : 'Yeni Həkim Əlavə Et')}
          </h2>
          <button onClick={onClose} className="modal-close" title="Bağla">
            <X size={24} />
          </button>
        </div>

        {formError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Xəta!</strong>
            <span className="block sm:inline"> {formError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="modal-body">
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">Ad Soyad:</label>
            <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="form-input" placeholder="Həkimin adını daxil edin" disabled={isViewMode} />
          </div>

          <div className="form-group">
            <label htmlFor="position" className="form-label">İxtisas:</label>
            <input type="text" id="position" name="position" value={formData.position} onChange={handleChange} className="form-input" placeholder="Həkimin ixtisasını daxil edin" disabled={isViewMode} />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">Telefon:</label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-input" placeholder="Telefon nömrəsini daxil edin" disabled={isViewMode} />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="Email adresini daxil edin" disabled={isViewMode} />
          </div>

          <div className="form-group">
            <label htmlFor="appointmentPrice" className="form-label">Qəbul qiyməti (AZN):</label>
            <input type="number" id="appointmentPrice" name="appointmentPrice" value={formData.appointmentPrice} onChange={handleChange} className="form-input" placeholder="Məsələn: 30" disabled={isViewMode} />
          </div>

          <div className="form-group">
            <label htmlFor="workplace" className="form-label">İş yeri:</label>
            <input type="text" id="workplace" name="workplace" value={formData.workplace} onChange={handleChange} className="form-input" placeholder="Məsələn: Bakı Psixologiya Mərkəzi" disabled={isViewMode} />
          </div>

          <div className="form-group">
            <label htmlFor="userId" className="form-label">İstifadəçi ID-si:</label>
            <input type="text" id="userId" name="userId" value={formData.userId} onChange={handleChange} className="form-input" placeholder="user ID (əgər əlaqəlidirsə)" disabled={isViewMode} />
          </div>

          {!isViewMode && (
            <div className="modal-actions">
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                <Save size={16} />
                {isSubmitting ? 'Göndərilir...' : (modalType === 'add' ? 'Əlavə Et' : 'Yadda Saxla')}
              </button>
            </div>
          )}

          {isViewMode && (
            <div className="modal-actions">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Bağla</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default DoctorFormModal;