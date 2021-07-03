import React from "react";
import {
    ProfileCoin,
    ProfileCourse,
    ProfileInfo,
    ProfilePayment,
    ProfileProject,
    ProfileTop,
} from "./components";

const Profile = () => {
    return (
        <main className="profile" id="main">
            <section>
                <ProfileTop />
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <a href="!#" className="active">
                                Thông tin tài khoản
                            </a>
                            <a href="!#">Khóa học của bạn</a>
                            <a href="!#">Dự án đã làm</a>
                            <a href="!#">Lịch sử thanh toán</a>
                            <a href="!#">Quản lý COIN của tôi</a>
                        </div>
                        <div className="tab-content">
                            <ProfileInfo />
                            <ProfileCourse />
                            <ProfileProject />
                            <ProfilePayment />
                            <ProfileCoin />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Profile;
