import { API_ENDPOINTS } from '../api/config';

const getHeaders = (authenticated = false) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (authenticated) {
    const token = localStorage.getItem('access');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  return headers;
};

export const authService = {
  // Register a new user
  register: async (userData) => {
    const response = await fetch(API_ENDPOINTS.REGISTER, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(userData),
      credentials: 'include',
    });

    const data = await response.json();

    // Add success property based on the response status
    if (response.ok) {
      return { ...data, success: true };
    } else {
      return { ...data, success: false };
    }
  },

  // Login with email and password
  login: async (credentials) => {
    const response = await fetch(API_ENDPOINTS.LOGIN, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(credentials),
      credentials: 'include',
    });
    const data = await response.json();
    if (data.access) {
      localStorage.setItem('access', data.access);
      localStorage.setItem('refresh', data.refresh);
    }
    return data;
  },

  // Login with OTP
  loginWithOTP: async (phoneNumber) => {
    const response = await fetch(API_ENDPOINTS.LOGIN_OTP, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ phone_number: phoneNumber }),
      credentials: 'include',
    });
    return response.json();
  },

  // Verify OTP
  verifyOTP: async (otpData) => {
    const response = await fetch(API_ENDPOINTS.LOGIN_OTP_VERIFY, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(otpData),
      credentials: 'include',
    });
    const data = await response.json();
    if (data.access) {
      localStorage.setItem('access', data.access);
      localStorage.setItem('refresh', data.refresh);
    }
    return data;
  },

  // Get user profile
  getProfile: async () => {
    const token = localStorage.getItem('access');
    const response = await fetch(API_ENDPOINTS.PROFILE, {
      headers: getHeaders(true),
      credentials: 'include',
    });
    return response.json();
  },

  // Update user profile
  updateProfile: async (profileData) => {
    const token = localStorage.getItem('access');
    const response = await fetch(API_ENDPOINTS.PROFILE, {
      method: 'PUT',
      headers: getHeaders(true),
      body: JSON.stringify(profileData),
      credentials: 'include',
    });
    return response.json();
  },

  // Logout
  logout: () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  },
};