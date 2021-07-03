import { CourseList } from "components";
import React from "react";
import { Action, Banner, Different, Gallery, Testimonial } from "./components";

const Home = () => {
    return (
        <main className="homepage" id="main">
            <Banner />
            <CourseList />
            <Different />
            <Testimonial />
            <Gallery />
            <Action />
        </main>
    );
};

export default Home;
