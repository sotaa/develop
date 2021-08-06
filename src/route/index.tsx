import { Switch, Route } from "react-router-dom";
import {
  Auth,
  Gifs,
  Tasks,
  HeaderMenu,
  Users,
  UserProfile,
} from "../components";
import GuardedRoute from "../helper/authGaurd";
import { NotFound } from "../lib";

export function Routing() {
  return (
    <div>
      <div style={{ margin: "100px 0" }}>
        <HeaderMenu />
      </div>
      <Switch>
        <GuardedRoute exact path="/" component={Tasks} />
        <Route path="/auth">
          <Auth />
        </Route>
        <GuardedRoute path="/users" component={Users} />
        <GuardedRoute path="/profile" component={UserProfile} />
        <GuardedRoute path="/gifs" component={Gifs} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
