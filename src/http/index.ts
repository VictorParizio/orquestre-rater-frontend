import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export const http: AxiosInstance = axios.create({
  baseURL: "https://orquestre-rater-production.up.railway.app/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

interface APIError {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
}

export const postAPI = async <T>(
  path: string,
  formData: object
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await http.post(path, formData);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<APIError>;
    if (axiosError.response?.data?.message) {
      throw new Error(axiosError.response.data.message);
    } else {
      console.error("Erro do lado do servidor:", error);
    }
    throw axiosError;
  }
};

export const updateByIdAPI = async (
  path: string,
  userId: string,
  formData: object
) => {
  try {
    const response = await http.put(`${path}/${userId}`, formData);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<APIError>;
    if (axiosError.response?.data?.message) {
      console.error(axiosError.response.data.message);
    } else {
      console.error("Erro do lado do servidor:", error);
    }
    throw axiosError;
  }
};

export const deleteByIdAPI = async (path: string, userId: string) => {
  try {
    const response = await http.delete(`${path}/${userId}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<APIError>;
    if (axiosError.response?.data?.message) {
      console.error(axiosError.response.data.message);
    } else {
      console.error("Erro do lado do servidor:", error);
    }
    throw axiosError;
  }
};
