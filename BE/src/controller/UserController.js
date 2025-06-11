import { User } from "../model/UserModel.js";

export const findAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.send(error.nessage);
  }
};

export const findUserById = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await User.findById(id);
    res.send(user);
  } catch (error) {
    res.send(error.nessage);
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.body;
    const users = await User.findByIdAndDelete(id);
    res.send(users);
  } catch (error) {
    res.send(error.nessage);
  }
};

export const updateUserById = async (req, res) => {
  try {
    const { id } = req.body;
    const { body } = req;
    const users = await User.findByIdAndUpdate(id, body);
    res.send(users);
  } catch (error) {
    res.send(error.nessage);
  }
};

export const createOneUser = async (req, res) => {
  try {
    const { body } = req;
    const users = await User.create(body);
    res.send(users);
  } catch (error) {
    res.send(error.nessage);
  }
};
