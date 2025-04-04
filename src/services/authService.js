import { API_ENDPOINTS, getHeaders } from '../config/api';

export const authService = {
  // Register a new user
  register: async (userData) => {
    const response = await fetch(API_ENDPOINTS.REGISTER, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  // Login with email and password
  login: async (credentials) => {
    const response = await fetch(API_ENDPOINTS.LOGIN, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (data.access) {
      localStorage.setItem('token', data.access);
      localStorage.setItem('refreshToken', data.refresh);
    }
    return data;
  },

  // Login with OTP
  loginWithOTP: async (phoneNumber) => {
    const response = await fetch(API_ENDPOINTS.LOGIN_WITH_OTP, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ phone_number: phoneNumber }),
    });
    return response.json();
  },

  // Verify OTP
  verifyOTP: async (otpData) => {
    const response = await fetch(API_ENDPOINTS.VERIFY_OTP, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(otpData),
    });
    const data = await response.json();
    if (data.access) {
      localStorage.setItem('token', data.access);
      localStorage.setItem('refreshToken', data.refresh);
    }
    return data;
  },

  // Get user profile
  getProfile: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(API_ENDPOINTS.PROFILE, {
      headers: getHeaders(token),
    });
    return response.json();
  },

  // Update user profile
  updateProfile: async (profileData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(API_ENDPOINTS.PROFILE, {
      method: 'PUT',
      headers: getHeaders(token),
      body: JSON.stringify(profileData),
    });
    return response.json();
  },

  // Logout
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  },
};