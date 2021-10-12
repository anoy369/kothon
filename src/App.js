import Login from "./components/Login";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Chats from "./components/Chats";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";

function App() {
  const state = useContext(AuthContext);
  return (
    <Router>
      {state.user ? (
        <Switch>
          <Route path="/chats" component={Chats} />
          <Route path="/log" component={Chats} />
          <Route>
            <Redirect to="/chats" />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact component={Login} />
          <Redirect to="/" />
        </Switch>
      )}
    </Router>
  );
}

export default App;
