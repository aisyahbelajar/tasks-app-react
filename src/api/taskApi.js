import axiosInstance from "./axiosInstance";

const task = async (title) => {
  const { data } = await axiosInstance.post("/tasks", {
    title,
  });
  localStorage.setItem("token", data.token);
  return data.user;
};

export default task;
