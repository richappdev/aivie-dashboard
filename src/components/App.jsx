import React from 'react'
import Login from './Login.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import Dashboard from './Dashboard.jsx';
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
              <PrivateRoute path="/" component={Dashboard} />
            </Switch>
          </Router>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
