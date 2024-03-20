// userController.js
const userService = require('../services/userService');

exports.uploadImage = async (req, res) => {
  try {
    const { filename, path } = req.file;
    await userService.saveImagePathToDatabase(filename, path);
    res.status(201).json({ message: 'Image uploaded successfully' });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'An error occurred while uploading the image' });
  }
};

exports.getAllImages = async (req, res) => {
  try {
    const images = await userService.getAllImages();
    res.status(200).json(images);
  } catch (error) {
    console.error('Error getting images:', error);
    res.status(500).json({ error: 'An error occurred while getting images' });
  }
};

exports.deleteImage = async (req, res) => {
  try {
    const imageId = req.params.id;
    await userService.deleteImage(imageId);
    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ error: 'An error occurred while deleting the image' });
  }
};
