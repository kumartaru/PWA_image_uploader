// userRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const userController = require('../controllers/userController');

const storage = multer.diskStorage({
  destination:  (req, file, cb)=> {
    return cb(null, './uploads') 
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  },
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), userController.uploadImage);
router.get('/images', userController.getAllImages);
router.delete('/images/:id', userController.deleteImage);

module.exports = router;
