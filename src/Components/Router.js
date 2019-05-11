import React from "react";
import {HashRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";
import PropTypes from "prop-types";

const LoginRoute = () => (
    <Route exact path="/" component={Feed}/>
);

const LogoutRoute = () => (
    <Route exact path="/" component={Auth}/>
);

const AppRouter = ({isLogin}) => (
    <Router>
        <Switch>{isLogin ? <LoginRoute/> : <LogoutRoute/>}</Switch>
    </Router>
);

AppRouter.propTypes = {
    isLogin: PropTypes.bool.isRequired
}

export default AppRouter;