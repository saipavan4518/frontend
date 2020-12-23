import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import Navbar from './components/Navbar.component';
import Login from './components/Login.component';
import Register from './components/Register.component';
import Forum from './components/forums.component';
import RenderThread from './components/RenderThread.component';
import Dashboard from './components/Dashboard.component';

function App() {
  return (
    <Router>
        <div>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route strict path="/forums" component={Forum} />
          <Route path="/dashboard" component={Dashboard} />
          <Route strict path="/forum/thread/:id" component={RenderThread} />
        </div>
    </Router>
  );
}

export default App;
