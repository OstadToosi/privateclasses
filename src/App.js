import "./App.css";
import { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import MainPage from "./MainPage";
import Register from "./Register";
import Success from "./Success";

function App() {
  let location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
        <Route path="/privateclasses" exact component={MainPage} />
        <Route path="/privateclasses/register" exact component={Register} />
        <Route path="/privateclasses/success" exact component={Success} />
    </AnimatedSwitch >
  );
}

export default App;
