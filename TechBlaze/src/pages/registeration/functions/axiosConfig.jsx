// addition
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://registrationnomad-default-rtdb.firebaseio.com", // Replace with your Firebase URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
