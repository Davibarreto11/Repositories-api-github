import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Main} />
        <Route path="/repository/:repository" Component={Repository} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
