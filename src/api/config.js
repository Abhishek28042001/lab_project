// src/api/config.js

const BASE_URL = "http://localhost:8000/api/v1";  // Change this to your backend's URL

export const API_ENDPOINTS = {
  REGISTER: `${BASE_URL}/users/register/`,
  LOGIN: `${BASE_URL}/users/login/`,
  LOGIN_OTP: `${BASE_URL}/users/login/otp/`,
  LOGIN_OTP_VERIFY: `${BASE_URL}/users/login/otp/verify/`,

};
