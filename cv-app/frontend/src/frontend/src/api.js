import axios from "axios";

const API_URL = "http://localhost:5000";

export const login = (email, password) => axios.post(`${API_URL}/login`, { email, password });
export const saveCV = (data) => axios.post(`${API_URL}/save-cv`, data);
export const getCV = () => axios.get(`${API_URL}/get-cv`);
