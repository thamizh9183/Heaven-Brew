import axios from "axios";

const API = axios.create({
  baseURL: "https://heaven-brew-backend-p11b.onrender.com/api"

});

// 🔐 attach token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;
