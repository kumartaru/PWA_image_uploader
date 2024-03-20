// models/userModel.js
const {connection}=require('../../config/config')

exports.saveImagePathToDatabase = async (name, path) => {
  const insertQuery = 'INSERT INTO images (name, path) VALUES (?, ?)';
  await queryPromise(insertQuery, [name, path]);
};

exports.getAllImages = async () => {
  const selectQuery = 'SELECT * FROM images';
  return await queryPromise(selectQuery);
};

exports.deleteImage = async (imageId) => {
  const deleteQuery = "DELETE FROM images WHERE id = ?";
  await queryPromise(deleteQuery, [imageId]);
};

async function queryPromise(sql, values) {
  try {
    const results = await new Promise((resolve, reject) => {
      connection.query(sql, values, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
    return results;
  } catch (error) {
    throw error;
  }
}
  
