import "./App.css";
import { Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";

function App() {
  return (
    <Switch>
      <Route path="/privateclasses" exact component={MainPage} />
    </Switch>
  );
}

export default App;
