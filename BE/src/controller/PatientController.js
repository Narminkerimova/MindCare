import { Patient } from "../model/PatientModel.js";

export const findAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json({ success: true, data: patients });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const findPatientById = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findById(id);
    if (!patient) return res.status(404).json({ success: false, message: "Pasiyent tapılmadı" });
    res.status(200).json({ success: true, data: patient });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deletePatientById = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findByIdAndDelete(id);
    if (!patient) return res.status(404).json({ success: false, message: "Silinəcək pasiyent tapılmadı" });
    res.status(200).json({ success: true, message: "Pasiyent uğurla silindi", data: patient });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updatePatientById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPatient = await Patient.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedPatient) return res.status(404).json({ success: false, message: "Yenilənəcək pasiyent tapılmadı" });
    res.status(200).json({ success: true, data: updatedPatient });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createOnePatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json({ success: true, data: patient });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
