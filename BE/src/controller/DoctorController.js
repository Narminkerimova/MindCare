import { Doctor } from "../model/DoctorModel.js";

export const findAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const findDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findById(id);
    if (!doctor) return res.status(404).json({ message: "Həkim tapılmadı" });
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findByIdAndDelete(id);
    if (!doctor) return res.status(404).json({ message: "Silinəcək həkim tapılmadı" });
    res.status(200).json({ message: "Həkim uğurla silindi", doctor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDoctor = await Doctor.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedDoctor) return res.status(404).json({ message: "Yenilənəcək həkim tapılmadı" });
    res.status(200).json(updatedDoctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createOneDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.status(201).json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
