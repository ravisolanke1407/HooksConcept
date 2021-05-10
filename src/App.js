import { Route, Switch,Redirect } from "react-router-dom";
import { ProductProvider } from "./Components/Context/ProductContext";
import Home from './Components/Home';
import A from "./Components/TestComponents/A";
import B from "./Components/TestComponents/B";
import Parent from "./Components/UseCallBack/Home";
import UseMemo from "./Components/useMemo";

function App() {
  return (
    <div className="root">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/useCallback" component={Parent} />
        <Route exact path="/useMemo" component={UseMemo} />

       
            <Redirect to="/" />
      </Switch>
      {/* <ProductProvider>
      <A />
      <B/>
      </ProductProvider> */}
    
    </div>
  );
}

export default App;
