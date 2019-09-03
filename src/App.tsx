import React from 'react';
import Router from './components/Router';
import MainLayout from './components/mainLayout';

const App: React.FC = () => {
  return (
    <MainLayout>
      <Router />
    </MainLayout>
  );
}

export default App;
