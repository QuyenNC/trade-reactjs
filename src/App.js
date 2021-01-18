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
import ExchangeRequest from './Components/Trade/ExchangeRequest';
import RequestExchange from './Components/Trade/RequestExchange';
import HistoryExchange from './Components/Trade/HistoryExchange';
import PostExchange from './Components/Trade/PostExchange';
import PostProduct from './Components/Trade/PostProduct';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/post-product">
            <PostProduct />
          </Route>
          <Route path="/post-exchange">
            <PostExchange />
          </Route>
          <Route path="/history-exchange">
            <HistoryExchange />
          </Route>
          <Route path="/request-exchange">
            <RequestExchange />
          </Route>
          <Route path="/exchange-request">
            <ExchangeRequest />
          </Route>
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
