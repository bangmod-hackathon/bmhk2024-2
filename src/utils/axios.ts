import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: import.meta.env.APP_BACKEND_URL ?? 'http://localhost:4000',
  withCredentials: true
})
