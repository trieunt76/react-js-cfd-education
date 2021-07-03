import React from "react";
import { CourseContent, CourseInfo, CourseRelated } from "./components";

const CourseDetail = () => {
    return (
        <main className="course-detail" id="main">
            <CourseInfo />
            <CourseContent />
            <CourseRelated />
        </main>
    );
};

export default CourseDetail;
