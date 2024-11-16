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

const getUser = async () => {
  try {
    const { data } = await axiosInstance.get("/users/profile");
    console.log("Fetched tasks:", data);
    return data.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized. Please check your token or login again.");
    }
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

const updateUser = async (updatedData) => {
  try {
    const response = await axiosInstance.put("/users/profile", updatedData);
    console.log("User data updated successfully:", response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      console.error("Bad Request. Please check the input data.");
    } else if (error.response && error.response.status === 401) {
      console.error("Unauthorized. Please check your token or login again.");
    } else {
      console.error("Error updating user data:", error);
    }
    throw error;
  }
};

export const userApi = {
  login,
  getUser,
  updateUser,
};
