import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import UserDetail from "./Components/UserDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/totalCloud" component={HomePage} />
        <Route exact path="/totalCloud/:url_id" component={UserDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
