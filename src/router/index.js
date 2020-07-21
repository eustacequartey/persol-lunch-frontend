<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Order, Login, Users } from "../pages";
import { Dashboard } from "../components/general";
=======
import React, { useContext } from "react";
>>>>>>> origin/master
import styled from "styled-components";
import AuthRouter from "./Auth";
import AppRouter from "./AppFront";
import { AppContext } from "../context/";

<<<<<<< HEAD
const Router = () => (
  <StyledApp>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Dashboard>
          <Route path="/" exact={true} component={Home} />
          <Route path="/users" exact={true} component={Users} />

          <Route path="/order" component={Order} />
        </Dashboard>
      </Switch>
    </BrowserRouter>
  </StyledApp>
);
=======
const Router = () => {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <StyledApp>
      {isLoggedIn && <AppRouter />}
      {!isLoggedIn && <AuthRouter />}
    </StyledApp>
  );
};
>>>>>>> origin/master

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex: 1;
  // border: 1px solid black;
`;

export default Router;
