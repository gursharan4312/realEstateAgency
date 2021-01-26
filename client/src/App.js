import Index from "./pages";
import { Route, Switch } from "react-router-dom";
import NotFound from "./pages/404";
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
