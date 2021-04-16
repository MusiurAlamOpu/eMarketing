import { createContext, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Admin from "./components/Admin/Admin";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import NavBar from "./components/Shared/NavBar/NavBar";
export const UserContext = createContext();
function App() {
  const [SignedInUser, setSignedInUser] = useState({});
  const userInfo = {
    name: 'Musiur',
    isLoggedIn: true
  }
  setSignedInUser(userInfo);
  return (
    <UserContext.Provider value={[SignedInUser, setSignedInUser]}>
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
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/logIn">
            <LogIn />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
