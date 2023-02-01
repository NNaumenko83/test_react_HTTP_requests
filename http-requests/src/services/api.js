import axios from "axios";

axios.defaults.baseURL = "https://63d9ea6b2af48a60a7c1e509.mockapi.io";

export const addTodo = async (values) => {
  const response = await axios.post("/todos", values);
  return response.data;
};

export const getTodos = async () => {
  const response = await axios.get("/todos");
  return response.data;
};

export const deletTodo = async (id) => {
  const response = await axios.delete(`./todos/${id}`);
  return response.data;
};

export const updateTodo = async (fields) => {
  console.log(fields);
  const response = await axios.put(`./todos/${fields.id}`, fields);
  return response.data;
};
