import React from 'react';
import './App.css';
import LoginScreen from './screens/loginScreen';

const App: React.FC = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <LoginScreen />
    </div>
  );
};

export default App;