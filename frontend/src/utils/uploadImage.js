
import { axiosInstance } from "../lib/axios";

const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  const res = await axiosInstance.post(
    `/image`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data; 
};

export default uploadImage;
