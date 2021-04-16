import { createContext, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Admin from "./components/Admin/Admin";
import Contact from "./components/Contact/Contact";
import Customer from "./components/Customer/Customer";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NavBar from "./components/Shared/NavBar/NavBar";


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({isLoggedIn: false});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/customer">
          <Customer/>
          </PrivateRoute>
          {/* <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/customer">
            <Customer/>
          </Route> */}
          <Route path="/logIn">
            <LogIn />
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
