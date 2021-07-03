import { PATHS } from "../constants";
import { MainLayout } from "layouts";
import Coin from "../pages/Coin";
import Contact from "pages/Contact";
import Course from "pages/Course";
import CourseDetail from "pages/CourseDetail";
import Home from "pages/Home";
import FAQ from "pages/FAQ";
import Payment from "pages/Payment";
import Profile from "pages/Profile";
import Project from "pages/Project";
import Register from "pages/Register";
import Team from "pages/Team";
import Email from "pages/Email";
import NotFound from "pages/NotFound";

const routers = [
    {
        path: PATHS.EMAIL,
        component: Email,
    },
    {
        component: MainLayout,
        path: "/",
        routersChildren: [
            {
                path: PATHS.HOME,
                component: Home,
                exact: true,
            },
            {
                path: PATHS.COIN,
                component: Coin,
            },
            {
                path: PATHS.CONTACT,
                component: Contact,
            },
            {
                path: PATHS.COURSE,
                component: Course,
            },
            {
                path: PATHS.COURSE_DETAIL,
                component: CourseDetail,
            },
            {
                path: PATHS.FAQ,
                component: FAQ,
            },
            {
                path: PATHS.PAYMENT,
                component: Payment,
            },
            {
                path: PATHS.PROFILE,
                component: Profile,
                exact: true,
            },
            {
                path: PATHS.PROJECT,
                component: Project,
            },
            {
                path: PATHS.REGISTER,
                component: Register,
            },
            {
                path: PATHS.TEAM,
                component: Team,
            },
            {
                path: PATHS.NOT_FOUND,
                component: NotFound,
            },
        ],
    },
];

export default routers;
