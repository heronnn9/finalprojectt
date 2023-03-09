import axios from "axios";
const apiService = {};
const apiGateway = axios.create({
  baseURL: "https://localhost:7298/api",
});

apiService.get = (url) => apiGateway.get(url);
apiService.post = (url, data) => apiGateway.post(url, data);

export default apiService;
