import { AppProvider, renderRouters } from "core";
import React from "react";
import routers from "routers";

const App = () => {
    return <AppProvider>{renderRouters(routers)}</AppProvider>;
};

export default App;
