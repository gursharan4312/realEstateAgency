import Index from "./pages";
import { Route, Switch } from "react-router-dom";
import NotFound from "./pages/404";
import About from "./pages/about";
import Contact from "./pages/contact";
import Homes from "./pages/homes";
import Rentals from "./pages/rentals";
import HomeDetails from "./pages/HomeDetails";
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/homes/:id" component={Homes} />
      <Route path="/homes" component={Homes} />
      <Route path="/rentals" component={Rentals} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
