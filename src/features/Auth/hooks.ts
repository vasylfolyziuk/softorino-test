import axios from "axios";
import { User } from "../../dataStructure"

const api = 'http://127.0.0.1:3001/api';

const getRequestConfig = () => ({
  headers: {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem('token')
  },
  withCredentials: true,
});

export const useAuth = () => {

  const auth =  async(email: string, password: string) => {
    try {
      const { data } = await axios.post(
        `${api}/auth`,
        {
          email,
          password,
        },
        getRequestConfig()
      );
      return data;
    } catch(error: any) {
      return error.response?.data;
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const { data } = await axios.post(
        `${api}/login`,
        {
          user: {
            email,
            password
          }
        },
        getRequestConfig()
      );
      return data;
    } catch(error: any) {
      return error.response?.data;
    }
  }

  const logout = async () => {
    try {
      const { data } = await axios.post(
        `${api}/logout`,
        {},
        getRequestConfig()
      );
      return data;
    } catch(error: any) {
      return error.response?.data;
    }
  }

  return {
    auth,
    login,
    logout
  }
}