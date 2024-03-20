// models/userService.js
const userModel = require('../models/userModel');

exports.saveImagePathToDatabase = async (name, path) => {
  try {
    await userModel.saveImagePathToDatabase(name, path);
  } catch (error) {
    throw error;
  }
};

exports.getAllImages = async () => {
  try {
    return await userModel.getAllImages();
  } catch (error) {
    throw error;
  }
};

exports.deleteImage = async (imageId) => {
  try {
    await userModel.deleteImage(imageId);
  } catch (error) {
    throw error;
  }
};
