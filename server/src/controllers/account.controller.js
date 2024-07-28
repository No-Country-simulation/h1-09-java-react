import User from "../models/User.js";
import cloudinary from "../utils/cloudinary.js";

export const updateProfile = async (req, res) => {
  try {
    const data  = req.body;
    
    if (data === undefined || Object.keys(data).length === 0 || data === null) return res.status(400).json({ message: "Se necesita un valor" });

    await User.update(data, 
      {
        where: {
          id: req.user.id
        }
      }
    )

    return res.status(200).json({ status: 'success', message: 'Perfil actualizado'});
  } catch (error) {
    return res.status(400).json({ status: 'failed', message: error.message })
  }
}

export const uploadProfileImage = async (req, res) => {
  try {
    let secure_url;
    if (!req.file) return res.status(400).send("Por favor seleccione una imagen para subir");

    const imageFile = req.file;
    const { buffer } = imageFile;

    cloudinary.uploader.upload_stream(async (error, result) => {
      if (error) throw error;

      secure_url = result.secure_url;
      await User.update({
        profile_picture: secure_url
      }, {
        where: {
          id: req.user.id
        }
      })
    }).end(buffer);

    return res.status(200).json({ message: "Foto de perfial actualizada" })
  } catch (error) {
    return res.status(400).json({ status: 'failed', message: error.message });
  }
}