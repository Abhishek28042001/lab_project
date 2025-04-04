import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    preferences: {
      currency: "USD",
      distanceUnit: "miles",
      language: "English",
      notifications: true,
      darkMode: false
    }
  });

  const [activeTab, setActiveTab] = useState("account");
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePreferenceChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({
      ...user,
      preferences: {
        ...user.preferences,
        [name]: type === "checkbox" ? checked : value
      }
    });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      name: formData.name,
      email: formData.email
    });
    alert("Profile updated successfully!");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Password change logic would go here
    alert("Password changed successfully!");
    setFormData({
      ...formData,
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };

  const tabButtons = [
    { id: "account", label: "Account" },
    { id: "password", label: "Password" },
    { id: "preferences", label: "Preferences" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                  <p className="text-gray-500 mb-4">{user.email}</p>
                  <Button className="w-full mb-2">Change Avatar</Button>
                  <Button variant="outline" className="w-full">Log Out</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Tab Navigation */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {tabButtons.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-4 text-center rounded-md transition-colors ${
                    activeTab === tab.id
                      ? "bg-white shadow-sm text-gray-800 font-medium"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Account Tab */}
            {activeTab === "account" && (
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProfileSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div className="pt-2">
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                          Save Changes
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Password Tab */}
            {activeTab === "password" && (
              <Card>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePasswordSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Current Password
                        </label>
                        <input
                          type="password"
                          id="currentPassword"
                          name="currentPassword"
                          value={formData.currentPassword}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          New Password
                        </label>
                        <input
                          type="password"
                          id="newPassword"
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div className="pt-2">
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                          Update Password
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Preferences Tab */}
            {activeTab === "preferences" && (
              <Card>
                <CardHeader>
                  <CardTitle>User Preferences</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">
                        Currency
                      </label>
                      <select
                        id="currency"
                        name="currency"
                        value={user.preferences.currency}
                        onChange={handlePreferenceChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                        <option value="GBP">GBP (£)</option>
                        <option value="JPY">JPY (¥)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="distanceUnit" className="block text-sm font-medium text-gray-700 mb-1">
                        Distance Unit
                      </label>
                      <select
                        id="distanceUnit"
                        name="distanceUnit"
                        value={user.preferences.distanceUnit}
                        onChange={handlePreferenceChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="miles">Miles</option>
                        <option value="kilometers">Kilometers</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                        Language
                      </label>
                      <select
                        id="language"
                        name="language"
                        value={user.preferences.language}
                        onChange={handlePreferenceChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                      </select>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="notifications"
                        name="notifications"
                        checked={user.preferences.notifications}
                        onChange={handlePreferenceChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="notifications" className="ml-2 block text-sm text-gray-700">
                        Enable email notifications
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="darkMode"
                        name="darkMode"
                        checked={user.preferences.darkMode}
                        onChange={handlePreferenceChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="darkMode" className="ml-2 block text-sm text-gray-700">
                        Enable dark mode
                      </label>
                    </div>

                    <div className="pt-2">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Save Preferences
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;