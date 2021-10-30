import React from 'react'
import Login from './Login.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import Home from './Home.jsx';
import { AuthProvider } from "../context/AuthContext"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <AuthProvider>
        <div>
          <Router>
            <Switch>
              {/* <Route path="/signup" component={Signup} /> */}
              <Route path="/login" component={Login} />
              <PrivateRoute path="/" component={Home} />
            </Switch>
          </Router>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
