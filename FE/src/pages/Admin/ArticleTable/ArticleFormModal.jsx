import React, { useState, useEffect, useContext } from 'react';
import { X, Save } from 'lucide-react';
import { AdminDataContext } from '../../../context/AdminProvider.jsx';
import { ModalContext } from '../../../context/ModalProvider.jsx';
import './../modal.css'

function ArticleFormModal({ isOpen, onClose, modalType, initialData }) {
  const { addItem, updateItem } = useContext(AdminDataContext);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    date: '', 
    content: '',
    photoUrl: '',
    tags: [], 
    author: '',
  });
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialData && (modalType === 'edit' || modalType === 'view')) {
      setFormData({
        title: initialData.title || '',
        category: initialData.category || '',
        date: initialData.date ? new Date(initialData.date).toISOString().split('T')[0] : '',
        content: initialData.content || '',
        photoUrl: initialData.photoUrl || '',
        tags: initialData.tags || [],
        author: initialData.author?._id || initialData.author || '',
    });
} else {
  setFormData({
    title: '',
    category: '',
    date: new Date().toISOString().split('T')[0], 
    content: '',
    photoUrl: '',
    tags: [],
    author: '',
  });
}
setFormError('');
  }, [initialData, modalType, isOpen]);

const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === 'tags') {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
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

  if (!formData.title || !formData.category || !formData.date || !formData.content || !formData.author) {
    setFormError('Başlıq, Kateqoriya, Tarix, Məzmun və Müəllif sahələri tələb olunur.');
    setIsSubmitting(false);
    return;
  }

  let payload = { ...formData };
  if (payload.date) {
    payload.date = new Date(payload.date).toISOString();
    console.log("Payload:", payload);
  }

  let result;
  if (modalType === 'add') {
    result = await addItem('article', payload);
  } else if (modalType === 'edit') {
    result = await updateItem('article', initialData._id, payload);
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
          {isViewMode ? 'Məqaləyə Baxış' : (modalType === 'edit' ? 'Məqaləni Redaktə Et' : 'Yeni Məqalə Əlavə Et')}
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
            <label htmlFor="title" className="form-label">Başlıq:</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="form-input" placeholder="Məqalə başlığını daxil edin" disabled={isViewMode} />
          </div>
          <div className="form-group">
            <label htmlFor="category" className="form-label">Kateqoriya:</label>
            <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} className="form-input" placeholder="Məsələn: Psixologiya, Depressiya" disabled={isViewMode} />
          </div>
          <div className="form-group">
            <label htmlFor="date" className="form-label">Tarix:</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="form-input" disabled={isViewMode} />
          </div>
          <div className="form-group">
            <label htmlFor="content" className="form-label">Məzmun:</label>
            <textarea id="content" name="content" value={formData.content} onChange={handleChange} className="form-input" rows="5" placeholder="Məqalənin məzmununu daxil edin" disabled={isViewMode}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="photoUrl" className="form-label">Şəkil URL-i:</label>
            <input type="text" id="photoUrl" name="photoUrl" value={formData.photoUrl} onChange={handleChange} className="form-input" placeholder="http://example.com/image.jpg" disabled={isViewMode} />
          </div>
          <div className="form-group">
            <label htmlFor="tags" className="form-label">Taqlar (vergüllə ayırın):</label>
            <input type="text" id="tags" name="tags" value={formData.tags.join(', ')} onChange={handleChange} className="form-input" placeholder="tag1, tag2, ..." disabled={isViewMode} />
          </div>
          <div className="form-group">
            <label htmlFor="author" className="form-label">Müəllif (Həkim ID):</label>
            <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} className="form-input" placeholder="Müəllif həkimin ID-sini daxil edin" disabled={isViewMode} />
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

export default ArticleFormModal;