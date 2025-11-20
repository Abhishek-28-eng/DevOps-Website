import axios from "axios";

const base = import.meta.env.VITE_API_BASE_URL || "https://www.devwithabhi.de/api/";

const instance = axios.create({
  baseURL: base,
  headers: {
    "Content-Type": "application/json"
  }
});

instance.interceptors.request.use((cfg) => {
  const token = localStorage.getItem("devops_token");
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});

export default instance;
