import { Center } from "../model/CenterModel.js";

export const findAllCenters = async (req, res) => {
  try {
    const centers = await Center.find();
    res.status(200).json(centers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const findCenterById = async (req, res) => {
  try {
    const { id } = req.params;
    const center = await Center.findById(id);
    if (!center) return res.status(404).json({ message: "Mərkəz tapılmadı" });
    res.status(200).json(center);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCenterById = async (req, res) => {
  try {
    const { id } = req.params;
    const center = await Center.findByIdAndDelete(id);
    if (!center) return res.status(404).json({ message: "Silinəcək mərkəz tapılmadı" });
    res.status(200).json({ message: "Mərkəz uğurla silindi", center });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCenterById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCenter = await Center.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedCenter) return res.status(404).json({ message: "Yenilənəcək mərkəz tapılmadı" });
    res.status(200).json(updatedCenter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createOneCenter = async (req, res) => {
  try {
    const center = await Center.create(req.body);
    res.status(201).json(center);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
