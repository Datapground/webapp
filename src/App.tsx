import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import RootLayout from './layouts/RootLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />

      {/* Protected Routes (With Sidebar) */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<h1>Home Page</h1>} />
        <Route path="profile" element={<h1>Profile Page</h1>} />
        <Route path="settings" element={<h1>Settings Page</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
