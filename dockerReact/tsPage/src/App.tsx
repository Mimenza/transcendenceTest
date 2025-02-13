import React from 'react';
import './App.css';
import LoginScreen from './screens/loginScreen';
import SignupScreen from './screens/signupScreen';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Router>
        <Routes>
          {/* Ruta por defecto redirige a /login */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;