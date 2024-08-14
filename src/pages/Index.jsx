import React, { useEffect } from 'react';
import TodoList from '../components/TodoList';

const Index = () => {
  useEffect(() => {
    // This will throw an error after 2 seconds
    const timer = setTimeout(() => {
      throw new Error("This is a test error thrown after initialization");
    }, 2000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Simple Todo App</h1>
        <TodoList />
      </div>
    </div>
  );
};

export default Index;