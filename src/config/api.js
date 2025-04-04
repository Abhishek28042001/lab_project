const API_BASE_URL = 'http://localhost:8000/api/v1';

export const API_ENDPOINTS = {
  // Authentication endpoints
  REGISTER: `${API_BASE_URL}/users/register/`,
  LOGIN: `${API_BASE_URL}/users/login/`,
  LOGIN_WITH_OTP: `${API_BASE_URL}/users/login/otp/`,
  VERIFY_OTP: `${API_BASE_URL}/users/login/otp/verify/`,
  PROFILE: `${API_BASE_URL}/users/profile/`,
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