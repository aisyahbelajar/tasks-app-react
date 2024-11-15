import axiosInstance from "./axiosInstance";

const login = async (email, password) => {
  const { data } = await axiosInstance.post("/users/login", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  return data.user;
};

export default login;
