import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';




import Navbar from './components/Navbar.component';
import Login from './components/Login.component';
import Register from './components/Register.component';
import Forum from './components/forums.component';
import RenderThread from './components/RenderThread.component';


function App() {
  return (
    <Router>
        <div>
          <Navbar />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forum" component={Forum} />
          <Route strict path="/thread/:id" component={RenderThread} />
        </div>
    </Router>
  );
}

export default App;
