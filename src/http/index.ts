import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export const http: AxiosInstance = axios.create({
  baseURL: "https://orquestre-rater-production.up.railway.app/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

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
