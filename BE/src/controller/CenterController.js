import { Center } from "../model/CenterModel.js"; 

export const findAllCenters = async (req, res) => {
  try {
    const centers = await Center.find();
    res.status(200).json({ success: true, data: centers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const findCenterById = async (req, res) => {
  try {
    const { id } = req.params;
    const center = await Center.findById(id);
    if (!center) return res.status(404).json({ success: false, message: "Mərkəz tapılmadı" });
    res.status(200).json({ success: true, data: center });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteCenterById = async (req, res) => {
  try {
    const { id } = req.params;
    const center = await Center.findByIdAndDelete(id);
    if (!center) return res.status(404).json({ success: false, message: "Silinəcək mərkəz tapılmadı" });
    res.status(200).json({ success: true, message: "Mərkəz uğurla silindi", data: center });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateCenterById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCenter = await Center.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedCenter) return res.status(404).json({ success: false, message: "Yenilənəcək mərkəz tapılmadı" });
    res.status(200).json({ success: true, data: updatedCenter });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createOneCenter = async (req, res) => {
  try {
    const center = await Center.create(req.body);
    res.status(201).json({ success: true, data: center });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};