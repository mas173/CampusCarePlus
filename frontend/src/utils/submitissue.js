import { axiosInstance } from "../lib/axios";

const submitIssue = async (form) => {
  if (!form) {
    return {
      success: false,
      message: "Form data is missing",
    };
  }

  try {
    const response = await axiosInstance.post("/submit", form);

    return {
      success: true,
      data: response.data,
    };

  } catch (error) {
    console.error("Submit Issue Error:", error);

    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Server error while submitting issue",
    };
  }
};

export default submitIssue;