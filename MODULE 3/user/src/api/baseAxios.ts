import axios from "axios";
const baseAxios = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
});
export default baseAxios;
