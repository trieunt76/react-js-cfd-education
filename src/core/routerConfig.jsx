import { Route, Switch } from "react-router-dom";

const renderRouters = (routers) => {
    return (
        <Switch>
            {routers.map((router, idx) => {
                let {
                    path,
                    component: Component,
                    exact,
                    routersChildren,
                } = router;

                let children = null;

                if (routersChildren) {
                    children = renderRouters(routersChildren);
                }

                return (
                    <Route
                        key={idx}
                        path={path}
                        exact={exact}
                        render={(props) => (
                            <Component {...props}>{children}</Component>
                        )}
                    />
                );
            })}
        </Switch>
    );
};

export default renderRouters;
