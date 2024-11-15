import axiosInstance from "./axiosInstance";

const getTasks = async () => {
  try {
    const { data } = await axiosInstance.get("/tasks");
    console.log("Fetched tasks:", data); // Tambahkan log ini untuk melihat response
    return data.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized. Please check your token or login again.");
    }
    console.error("Error fetching tasks:", error); // Tambahkan log ini untuk melihat error
    throw error;
  }
};

const updateTaskStatus = async (id) => {
  try {
    const { data } = await axiosInstance.patch(`/tasks/${id}/done`);
    return data.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized. Please check your token or login again.");
    }
    throw error;
  }
};

const deleteTask = async (id) => {
  try {
    const { data } = await axiosInstance.delete(`/tasks/${id}`);
    return data.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized. Please check your token or login again.");
    }
    throw error;
  }
};

const addTask = async (title) => {
  if (!title || typeof title !== "string" || title.trim() === "") {
    console.error("Invalid task title. Please provide a non-empty string.");
    return null;
  }

  try {
    const { data } = await axiosInstance.post("/tasks", { title });
    console.log("Task added successfully:", data);
    return data;
  } catch (error) {
    if (error.response) {
      console.error(
        `Error adding task: ${error.response.status} - ${
          error.response.data?.message || error.response.statusText
        }`
      );
    } else if (error.request) {
      console.error("No response received when adding task:", error.request);
    } else {
      console.error("Error creating task request:", error.message);
    }
    throw error; // Melempar error untuk penanganan lebih lanjut
  }
};

export const taskApi = {
  getTasks,
  updateTaskStatus,
  deleteTask,
  addTask,
};
