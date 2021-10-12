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
      <Switch>
        {state.user ? (
          <Route path="/chats" component={Chats} />
        ) : (
          <Route path="/" exact component={Login} />
        )}
        <Route>
          {state.user ? <Redirect to="/chats" /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
