import React from 'react';
import { Navbar } from '../navbar/navbar';
import { Home } from '../home/home';
import { NotFound } from '../not-found/not-found';

export const App = () => {
  const allowedPaths = ['/', '/react-foundation-docs/', '/react-foundation-docs'];

  return (
    <div className="app">
      <Navbar />
      {allowedPaths.includes(window.location.pathname) ? <Home /> : <NotFound />}
    </div>
  );
};
