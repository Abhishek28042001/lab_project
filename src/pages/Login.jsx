import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../components/ui/card";
import { authService } from "../services/authService";
import { API_ENDPOINTS } from "../api/config";

const Login = () => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("password");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone_number: "",
    otp: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const credentials = {
        email: formData.email,
        password: formData.password,
      };

      const response = await authService.login(credentials);

      if (response.access) {
        localStorage.setItem("access_token", response.access);
        localStorage.setItem("refresh_token", response.refresh);
        navigate("/dashboard");
      } else {
        setError(response.detail || "Login failed");
      }
    } catch (err) {
      setError("An error occurred during login");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await authService.loginWithOTP(formData.phone_number);

      if (response.message === "OTP sent successfully") {
        setOtpSent(true);
      } else {
        setError(response.error || "Failed to send OTP");
      }
    } catch (err) {
      setError("An error occurred while sending OTP");
      console.error("OTP error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const otpData = {
        phone_number: formData.phone_number,
        otp: formData.otp,
      };

      const response = await authService.verifyOTP(otpData);

      if (response.access) {
        localStorage.setItem("access_token", response.access);
        localStorage.setItem("refresh_token", response.refresh);
        navigate("/dashboard");
      } else {
        setError(response.error || "OTP verification failed");
      }
    } catch (err) {
      setError("An error occurred during OTP verification");
      console.error("OTP verification error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setLoginType("password")}
            className={`px-4 py-2 rounded-md ${
              loginType === "password"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Password Login
          </button>
          <button
            onClick={() => setLoginType("otp")}
            className={`px-4 py-2 rounded-md ${
              loginType === "otp"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            OTP Login
          </button>
        </div>

        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {loginType === "password" ? (
          <form className="mt-8 space-y-6" onSubmit={handlePasswordLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>
        ) : (
          <form
            className="mt-8 space-y-6"
            onSubmit={otpSent ? handleVerifyOTP : handleSendOTP}
          >
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="phone_number" className="sr-only">
                  Phone number
                </label>
                <input
                  id="phone_number"
                  name="phone_number"
                  type="tel"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Phone number"
                  value={formData.phone_number}
                  onChange={handleChange}
                />
              </div>
              {otpSent && (
                <div>
                  <label htmlFor="otp" className="sr-only">
                    OTP
                  </label>
                  <input
                    id="otp"
                    name="otp"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter OTP"
                    value={formData.otp}
                    onChange={handleChange}
                  />
                </div>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {loading
                  ? "Processing..."
                  : otpSent
                  ? "Verify OTP"
                  : "Send OTP"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
