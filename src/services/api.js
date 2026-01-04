import axios from "axios";

const API = "http://localhost:5000";

// save entry
export const saveEntry = async (payload) => {
  const res = await axios.post(`${API}/api/save`, payload);
  return res.data;
};

// get all entries
export const getAllEntries = async () => {
  const res = await axios.get(`${API}/api/all`);
  return res.data;
};
