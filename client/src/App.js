import Index from "./pages";
import { Route, Switch } from "react-router-dom";
import NotFound from "./pages/404";
import About from "./pages/about";
import Contact from "./pages/contact";
import Homes from "./pages/homes";
import Admin from "./pages/admin";
import Login from "./pages/login";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/homes/:id" component={Homes} />
      <Route path="/homes" component={Homes} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/admin" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
