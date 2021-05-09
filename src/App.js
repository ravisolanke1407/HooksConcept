import { Route, Switch,Redirect } from "react-router-dom";
import Home from './Components/Home';
import Parent from "./Components/UseCallBack/Home";
import UseMemo from "./Components/useMemo";

function App() {
  return (
    <div className="root">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/useCallback" component={Parent} />
        <Route exact path="/useMemo" component={UseMemo} />

        {/* <Route path="/messages" component={Messages} />
            <Route path="/about" component={About} /> */}
            <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
