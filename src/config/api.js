// src/api/config.js

const BASE_URL = "http://localhost:8000/api/v1";

export const API_ENDPOINTS = {
  REGISTER: `${BASE_URL}/users/register/`,
  LOGIN: `${BASE_URL}/users/login/`,
  LOGIN_OTP: `${BASE_URL}/users/login/otp/`,
  LOGIN_OTP_VERIFY: `${BASE_URL}/users/login/otp/verify/`,

};

// API request headers
export const getHeaders = (token = null) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};