import multer from "multer";
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/assets/pictures')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + (Math.round(Math.random() * 1E9) + path.extname(file.originalname))
      const newFilename = file.fieldname + '-' + uniqueSuffix;
      req.filename = newFilename
      cb(null, newFilename)
    }
  })

  function fileFilter (req, file, cb) {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  
    // To reject this file pass `false`, like so:
    console.log(file.mimetype );
    if ( file.mimetype != 'image/png') {
        req.errorMessage = `Format non reconnue`;
        return cb(null, false)
    } else {
        // To accept the file pass `true`, like so:
        cb(null, true)
    }
  
  
  }
  
  export const upload = multer({ storage: storage, fileFilter: fileFilter }).single('picture')