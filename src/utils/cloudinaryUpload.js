import { v2 as cloudinary } from "cloudinary";

export const uploadImagesToCloudinary = async (images) => {
  const uploadedImages = [];
  for (let i = 0; i < images.length; i++) {
    const uploaded = await cloudinary.uploader.upload(images[i], {
      folder: "micro_insta_posts",
    });
    uploadedImages.push(uploaded.secure_url);
  }
  return uploadedImages;
};
