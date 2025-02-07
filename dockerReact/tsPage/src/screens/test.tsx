import React from 'react';

const Test: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-center text-gray-900">Hello, Tailwind CSS!</h1>
        <p className="text-gray-600">
          This is a simple component to test if Tailwind CSS is working correctly.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Test;
