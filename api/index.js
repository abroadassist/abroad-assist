import axios from "axios";
import { ENV } from "constants/env";

const API = axios.create({
  baseURL: ENV.baseUrl,
});

const requestHandler = (config) => {
  return config;
};

const responseHandler = (response) => {
  return response?.data;
};

const errorHandler = (error) => {
  const status = error?.request?.status || error?.response?.status;
  let errorMessage;

  if (status >= 500) {
    errorMessage = "Network Error";
  } else if (status >= 400 && status < 500) {
    errorMessage = "Authentication Error";
  } else {
    errorMessage = "Unknown Error";
  }

  return errorMessage;
};

API.interceptors.request.use(requestHandler, errorHandler);

API.interceptors.response.use(responseHandler, errorHandler);

export default API;
