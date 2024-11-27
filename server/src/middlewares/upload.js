const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);

  if (extName && mimeType) {
    return cb(null, true);
  } else {
    cb(new Error("Only images are allowed"));
  }
};
const upload= multer({storage, fileFilter })
const uploadFields = upload.fields([
  { name: "profilePicture", maxCount: 1 }, 
  { name: "skills[]", maxCount: 1 },  
]);
module.exports = uploadFields;