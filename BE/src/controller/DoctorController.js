import { Doctor } from "../model/DoctorModel.js"; 

export const findAllDoctors = async (req, res, next) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json({
      success: true,
      data: doctors
    });
  } catch (error) {
    next(error);
  }
};

export const findDoctorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.status(404).json({ success: false, message: "Həkim tapılmadı" });
    }
    res.status(200).json({
      success: true,
      data: doctor
    });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ success: false, message: "Yanlış həkim ID-si" });
    }
    next(error); 
  }
};

export const deleteDoctorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findByIdAndDelete(id);
    if (!doctor) {
      return res.status(404).json({ success: false, message: "Silinəcək həkim tapılmadı" });
    }
    res.status(200).json({ success: true, message: "Həkim uğurla silindi", data: doctor });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ success: false, message: "Yanlış həkim ID-si" });
    }
    next(error);
  }
};

export const updateDoctorById = async (req, res, next) => {
  try {
    const { id } = req.params; 
    const { role, id: userId } = req.user;

    if (role === 'doctor' && id !== userId.toString()) {
      return res.status(403).json({ success: false, message: 'Başqa bir doktorun profilini yeniləməyə icazəniz yoxdur.' });
    }

    const existingDoctor = await Doctor.findById(id);
    if (!existingDoctor) {
      return res.status(404).json({ success: false, message: "Yenilənəcək həkim tapılmadı" });
    }

    const updatedDoctor = await Doctor.findByIdAndUpdate(id, req.body, {
      new: true, 
      runValidators: true 
    });

    res.status(200).json({
      success: true,
      message: 'Doktor profili uğurla yeniləndi.',
      data: updatedDoctor
    });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ success: false, message: "Yanlış həkim ID-si" });
    }
    if (error.name === 'ValidationError') {
      return res.status(400).json({ success: false, message: error.message });
    }
    next(error);
  }
};

export const createOneDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Yeni doktor profili uğurla yaradıldı (Admin tərəfindən).',
      data: doctor
    });
  } catch (error) {
    if (error.code === 11000) { 
      return res.status(400).json({ success: false, message: 'Bu məlumatlarla artıq bir doktor mövcuddur.' });
    }
    if (error.name === 'ValidationError') {
      return res.status(400).json({ success: false, message: error.message });
    }
    next(error);
  }
};

export const createDoctorProfile = async (req, res, next) => {
  try {
    const userId = req.user.id; 

    const existingProfile = await Doctor.findOne({ user: userId });
    if (existingProfile) {
      return res.status(400).json({ success: false, message: 'Bu istifadəçi üçün artıq bir doktor profili mövcuddur.' });
    }

    const doctorProfileData = {
      user: userId,
      ...req.body
    };

    const newDoctorProfile = await Doctor.create(doctorProfileData);

    res.status(201).json({
      success: true,
      message: 'Doktor profili uğurla yaradıldı.',
      data: newDoctorProfile
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ success: false, message: error.message });
    }
    next(error);
  }
};
