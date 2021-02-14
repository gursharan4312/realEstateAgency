import { Redirect, Route } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../context/GlobalContext";

function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useContext(StateContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        user.user && user.user.auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
