import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 10000, // Optional: request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers you want to include
  },
});