import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export const http: AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/trending/person/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYWU5NjE0N2FkZDZiOGQ0NDdlNmUzYmJhNWU0NTZlNSIsIm5iZiI6MTcyMzYxMTU0MC44NzMzMzksInN1YiI6IjY2YjRiZWFhMmNkNjc1OTg5YTI0MTgwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VMjffCl00K_zdqVJktm0B2nbVdPatvKqQoOS7FEBpUc",
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

export const getAPI = async <T>(path: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await http.get(path);
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
