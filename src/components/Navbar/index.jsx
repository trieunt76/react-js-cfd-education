import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../constants";

const Navbar = () => {
    const handleCloseNavbar = () => {
        document.body.classList.remove("menu-is-show");
    };

    return (
        <>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <a href="!#">Đăng ký / Đăng nhập</a>
                    </li>
                    <li>
                        <NavLink
                            exact={true}
                            onClick={handleCloseNavbar}
                            to={PATHS.HOME}
                        >
                            Trang chủ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleCloseNavbar} to={PATHS.TEAM}>
                            CFD Team
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleCloseNavbar} to={PATHS.COURSE}>
                            Khóa Học
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleCloseNavbar} to={PATHS.PROJECT}>
                            Dự Án
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleCloseNavbar} to={PATHS.CONTACT}>
                            Liên hệ
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div onClick={handleCloseNavbar} className="overlay_nav" />
        </>
    );
};

export default Navbar;
