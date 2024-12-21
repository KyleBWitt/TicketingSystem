import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:5000/api", // Adjust according to your API
  headers: { "Content-Type": "application/json" },
});

export default httpClient;
