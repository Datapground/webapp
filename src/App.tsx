import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import RootLayout from './layouts/RootLayout';
import Recovery from './pages/Recovery';
import VerifyOtp from './pages/VerifyOtp';
import ResetPassword from './pages/ResetPassword';
import PlayGround from './pages/PlayGround';
import APIKeys from './pages/APIKeys';
import Billings from './pages/Billings';
import Generator from './pages/Generator';
import BluPrints from './pages/BluPrints';
import Predictor from './pages/Predictor';
import Extender from './pages/Extender';
import WorkFlows from './pages/WorkFlows';
import Invites from './pages/Invites';
import Connections from './pages/Connections';
import Projects from './pages/Projects';
import Activity from './pages/Activity';
import Usage from './pages/Usage';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />

      {/* Recover password */}
      <Route path="/auth/recovery" element={<Recovery />} />
      <Route path="/auth/verify" element={<VerifyOtp />} />
      <Route path="/auth/reset" element={<ResetPassword />} />

      {/* Protected Routes (With Sidebar) */}
      <Route path="/" element={<RootLayout />}>
        <Route path="/" index element={<PlayGround />} />
        <Route path="/apikeys" element={<APIKeys />} />{' '}
        <Route path="/billings" element={<Billings />} />{' '}
        <Route path="/generator" element={<Generator />} />{' '}
        <Route path="/blueprints" element={<BluPrints />} />{' '}
        <Route path="/predictor" element={<Predictor />} />
        <Route path="/extender" element={<Extender />} />{' '}
        <Route path="/workflows" element={<WorkFlows />} />{' '}
        <Route path="/invites" element={<Invites />} />{' '}
        <Route path="/connections" element={<Connections />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/usage" element={<Usage />} />
      </Route>

      {/* 404 Page route */}
      <Route path="/404" element={<NotFound />} />
      {/* Fallback route when no tenant is provided */}
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default App;
