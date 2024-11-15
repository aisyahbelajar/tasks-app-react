import axiosInstance from "./axiosInstance";

const login = async (email, password) => {
  try {
    const { data } = await axiosInstance.post("/users/login", {
      email,
      password,
    });
    console.log("Login Response Data:", data);
    localStorage.setItem("token", data.data.token);
    return data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export default login;
