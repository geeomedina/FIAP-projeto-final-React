import React, { useContext } from "react";
import {
    Route,
    Redirect
} from "react-router-dom";
import { LoginContext } from "./providers/LoginProvider";

const Routes = ({ component: RouteComponent, ...rest }) => {

    const {user} = useContext(LoginContext);

    return (
        <Route
            {...rest}
            render={routeProps =>
                !!user ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to={"/login"} />
                )
            }
        />
    );
}
export default Routes;