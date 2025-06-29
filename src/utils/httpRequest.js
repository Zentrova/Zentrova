// utils/httpRequest.js
import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 🔐 Interceptor to add Bearer token from localStorage
// api.interceptors.request.use(
//   (config) => {
//     if (typeof window !== 'undefined') {
//       // const token = localStorage.getItem('Xentrova_token');
//       // if (token) {
//       //   config.headers.Authorization = `Bearer ${token}`;
//       // }
//        if (!navigator.onLine) {
//       return Promise.reject(new Error('You are offline'));
//     }
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// 🌐 Common HTTP request function
export const httpRequest = async ({ url, method = 'GET', data = {}, params = {}, headers = {} }) => {
  try {
    const response = await api({
      url,
      method,
      data,
      params,
      headers,
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      status: error.response?.status || 500,
      error: error.response?.data?.message || error.message,
    };
  }
};
