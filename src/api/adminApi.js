import axios from "axios";

const API_URL = import.meta.env.VITE_SERVER_URL;

export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/api/admin/list-waiting`);
  return response.data;
};

export const getUser = async (data) => {
  const response = await axios.post(`${API_URL}/api/user/detail`, data);
  return response.data;
};

export const manageRequest = async (data) => {
  const response = await axios.post(`${API_URL}/api/admin/status-review`, data);
  return response.data;
};
