import { Article } from "../model/ArticleModel.js";

export const findAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json({ success: true, data: articles });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const findArticleById = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id);
    if (!article) return res.status(404).json({ success: false, message: "Məqalə tapılmadı" });
    res.status(200).json({ success: true, data: article });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteArticleById = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findByIdAndDelete(id);
    if (!article) return res.status(404).json({ success: false, message: "Silinəcək məqalə tapılmadı" });
    res.status(200).json({ success: true, message: "Məqalə uğurla silindi", data: article });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateArticleById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedArticle = await Article.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedArticle) return res.status(404).json({ success: false, message: "Yenilənəcək məqalə tapılmadı" });
    res.status(200).json({ success: true, data: updatedArticle });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createOneArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);
    res.status(201).json({ success: true, data: article });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};