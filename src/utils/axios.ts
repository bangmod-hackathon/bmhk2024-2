import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:4000',
  timeout: 2000,
  withCredentials: true
})
