import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const GuardedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser && currentUser.id ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth" />
        )
      }
    />
  );
};

export default GuardedRoute;
