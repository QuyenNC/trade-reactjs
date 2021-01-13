import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



import './App.css';
import Header from './Components/Header';
import Index from './Components/Index/Index';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Forgot from './Components/Login/Forgot';
import Profile from './Components/Profile/Profile';
function App() {
  return (
    <Router>
      <div className="App">

        <Header />

        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/forgot">
            <Forgot />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}
export default App;
