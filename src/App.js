import "./App.css";
import { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import MainPage from "./MainPage";
import Register from "./Register";

function App() {
  let location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition key={location.key} classNames="fade" timeout={200}>
        <Switch>
          <Route path="/privateclasses" exact component={MainPage} />
          <Route path="/privateclasses/register" exact component={Register} />
        </Switch>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default App;
