import React, { useState, useEffect, useContext } from 'react';
import { X, Save } from 'lucide-react';
import { AdminDataContext } from '../../../context/AdminProvider.jsx';
import { ModalContext } from '../../../context/ModalProvider.jsx';
import './../modal.css'


function CenterFormModal({ isOpen, onClose, modalType, initialData }) {
  const { addItem, updateItem } = useContext(AdminDataContext);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    status: true, 
    fullAddress: '',
    phoneNumber: '',
    specialties: [],
    doctorsCount: 0,
    workingHours: { start: '', end: '' },
    rating: 0,
    photoUrl: '',
  });
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialData && (modalType === 'edit' || modalType === 'view')) {
      setFormData({
        name: initialData.name || '',
        city: initialData.city || '',
        status: typeof initialData.status === 'boolean' ? initialData.status : true,
        fullAddress: initialData.fullAddress || '',
        phoneNumber: initialData.phoneNumber || '',
        specialties: initialData.specialties || [],
        doctorsCount: initialData.doctorsCount || 0,
        workingHours: {
          start: initialData.workingHours?.start || '',
          end: initialData.workingHours?.end || '',
        },
        rating: initialData.rating || 0,
        photoUrl: initialData.photoUrl || '',
      });
    } else {
      setFormData({
        name: '',
        city: '',
        status: true,
        fullAddress: '',
        phoneNumber: '',
        specialties: [],
        doctorsCount: 0,
        workingHours: { start: '', end: '' },
        rating: 0,
        photoUrl: '',
      });
    }
    setFormError('');
  }, [initialData, modalType, isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'status') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    } else if (name === 'specialties') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value.split(',').map(s => s.trim()).filter(s => s !== ''),
      }));
    } else if (name === 'workingHours.start' || name === 'workingHours.end') {
      const [parent, child] = name.split('.');
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setIsSubmitting(true);

    if (!formData.name || !formData.city || !formData.fullAddress || !formData.phoneNumber || !formData.workingHours.start || !formData.workingHours.end || !formData.photoUrl) {
      setFormError('Ad, Şəhər, Ünvan, Telefon, İş Saatları və Şəkil URL-i sahələri tələb olunur.');
      setIsSubmitting(false);
      return;
    }
    if (isNaN(formData.doctorsCount) || formData.doctorsCount < 0) {
      setFormError('Həkim sayı düzgün rəqəm olmalıdır.');
      setIsSubmitting(false);
      return;
    }
    if (isNaN(formData.rating) || formData.rating < 0 || formData.rating > 5) {
      setFormError('Reytinq 0 ilə 5 arasında bir rəqəm olmalıdır.');
      setIsSubmitting(false);
      return;
    }

    let result;
    if (modalType === 'add') {
      result = await addItem('center', formData);
    } else if (modalType === 'edit') {
      result = await updateItem('center', initialData._id, formData);
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
            {isViewMode ? 'Mərkəzə Baxış' : (modalType === 'edit' ? 'Mərkəzi Redaktə Et' : 'Yeni Mərkəz Əlavə Et')}
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
              <label htmlFor="name" className="form-label">Mərkəz Adı:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="Mərkəz adını daxil edin" disabled={isViewMode} />
            </div>
            <div className="form-group">
              <label htmlFor="city" className="form-label">Şəhər:</label>
              <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="form-input" placeholder="Şəhəri daxil edin" disabled={isViewMode} />
            </div>
            <div className="form-group flex items-center gap-2">
              <input type="checkbox" id="status" name="status" checked={formData.status} onChange={handleChange} className="form-checkbox" disabled={isViewMode} />
              <label htmlFor="status" className="form-label mb-0">Aktiv Statusu</label>
            </div>
            <div className="form-group">
              <label htmlFor="fullAddress" className="form-label">Tam Ünvan:</label>
              <input type="text" id="fullAddress" name="fullAddress" value={formData.fullAddress} onChange={handleChange} className="form-input" placeholder="Tam ünvanı daxil edin" disabled={isViewMode} />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber" className="form-label">Telefon Nömrəsi:</label>
              <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="form-input" placeholder="+994XXYYYYYYY" disabled={isViewMode} />
            </div>
            <div className="form-group">
              <label htmlFor="specialties" className="form-label">İxtisaslar (vergüllə ayırın):</label>
              <input type="text" id="specialties" name="specialties" value={formData.specialties.join(', ')} onChange={handleChange} className="form-input" placeholder="Psixologiya, Terapiya, ..." disabled={isViewMode} />
            </div>
            <div className="form-group">
              <label htmlFor="doctorsCount" className="form-label">Həkim Sayı:</label>
              <input type="number" id="doctorsCount" name="doctorsCount" value={formData.doctorsCount} onChange={handleChange} className="form-input" placeholder="0" disabled={isViewMode} />
            </div>
            <div className="form-group">
              <label className="form-label">İş Saatları:</label>
              <div className="flex gap-2">
                <input type="time" id="workingHours.start" name="workingHours.start" value={formData.workingHours.start} onChange={handleChange} className="form-input w-1/2" disabled={isViewMode} />
                <span className="flex items-center">-</span>
                <input type="time" id="workingHours.end" name="workingHours.end" value={formData.workingHours.end} onChange={handleChange} className="form-input w-1/2" disabled={isViewMode} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="rating" className="form-label">Reytinq (0-5):</label>
              <input type="number" id="rating" name="rating" value={formData.rating} onChange={handleChange} className="form-input" placeholder="0" min="0" max="5" step="0.1" disabled={isViewMode} />
            </div>
            <div className="form-group">
              <label htmlFor="photoUrl" className="form-label">Şəkil URL-i:</label>
              <input type="text" id="photoUrl" name="photoUrl" value={formData.photoUrl} onChange={handleChange} className="form-input" placeholder="http://example.com/image.jpg" disabled={isViewMode} />
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

export default CenterFormModal;