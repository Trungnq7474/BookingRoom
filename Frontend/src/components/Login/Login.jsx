import "./Login.css";
import Logo from "../../assets/Logo.png";

function Login({ email, setEmail, password, setPassword, login }) {

    return (
        <>
            <div className="login-container">

                <div className="login-banner">
                    <div className="login-logo">
                        <img src={Logo} alt="Logo" />
                    </div>

                    <div className="login-banner-content">
                        <h1>
                            Chào Mừng Đến Với <br />
                            Booking-Rooms-Tools
                        </h1>

                        <p>
                            Hệ thống quản lý và đăng ký phòng học,
                            phòng thư viện và thiết bị.
                        </p>

                        <div className="login-banner-icons">
                            <i className="fa-solid fa-building"></i>
                            <i className="fa-solid fa-desktop"></i>
                            <i className="fa-solid fa-calendar-check"></i>
                            <i className="fa-solid fa-toolbox"></i>
                        </div>
                    </div>
                </div>

                <div className="login-form-container">

                    <div className="login-form">

                        <div className="login-icon">
                            <i className="fa-solid fa-user-lock"></i>
                        </div>

                        <h2>Đăng Nhập</h2>

                        <p className="login-subtitle">
                            Vui lòng đăng nhập để tiếp tục
                        </p>

                        <div>
                            <label>Email</label>

                            <div className="login-input">
                                <i className="fa-solid fa-user"></i>
                                <input
                                    type="text"
                                    placeholder="Nhập Email của bạn"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <label>Mật khẩu</label>

                            <div className="login-input">
                                <i className="fa-solid fa-lock"></i>
                                <input
                                    type="password"
                                    placeholder="Nhập mật khẩu"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="login-options">
                                <a href="#">Quên mật khẩu?</a>
                            </div>

                            <button onClick={login}>
                                Đăng Nhập
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};

export default Login;
