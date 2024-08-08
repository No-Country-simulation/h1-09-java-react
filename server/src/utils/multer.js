import multer from "multer";
import path from "path";

const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);

    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(
        new Error("El formato del archivo para la imagen no esta soportado, tiene que subir una imagen con extension jpg, jpeg o png"), 
        false
      );
      return;
    }

    cb(null, true);
  }
})

export default upload;