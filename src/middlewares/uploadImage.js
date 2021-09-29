const multer = require('multer');
const path = require('path');
const fs = require('fs');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

const storage = multer.diskStorage({
  async destination(req, file, cb) {
    const { userId, projectId } = req.body;
    let directoryPath = path.join(__dirname, `./uploads/${userId}/${projectId}`);

    if (!userId && !projectId) {
      directoryPath = path.join(__dirname, `./../view/templates`);
    }

    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true }, (err) => {
        if (err) {
          throw new ApiError(httpStatus.NOT_FOUND, 'File not uploaded');
        }
      });
    }

    cb(null, directoryPath);
  },
  filename(req, file, cb) {
    const re = /(?:\.([^.]+))?$/;

    cb(
      null,
      `${file.originalname.substr(0, file.originalname.lastIndexOf('.'))}-${Date.now()}.${re.exec(file.originalname)[1]}`
    );
  },
});

const fileFilter = (req, file, cb) => {
  const { userId, projectId } = req.body;
  const re = /(?:\.([^.]+))?$/;

  if (!userId && !projectId) {
    if (re.exec(file.originalname)[1] !== 'ghx' && re.exec(file.originalname)[1] !== 'gh') {
      return cb(new Error('Only ghx and gh are allowed'));
    }
  } else if (re.exec(file.originalname)[1] !== '3dm' && re.exec(file.originalname)[1] !== 'dwg') {
    return cb(new Error('Only 3dm and dwg are allowed'));
  }

  cb(null, true);
};

const upload = multer({ storage, fileFilter }).single('file');

module.exports = { upload };
