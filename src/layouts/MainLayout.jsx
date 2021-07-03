import { Footer, Header, Navbar } from "components";
import React from "react";

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;
