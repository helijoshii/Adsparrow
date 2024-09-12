import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
import bgImg from "../../assets/bg.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const dashboard = () => {
      navigate("/");
    };

    useEffect(() => {
        // Initialize particles.js
        window.particlesJS("particles-js", {
          particles: {
            number: {
              value: 310,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "bottom",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          retina_detect: true,
        });
      }, []);


  return (
    <div>
      <div>
      <div id="particles-js" class="snow"></div>
        <div className="bg_login" style={{ backgroundImage: `url(${bgImg})` }}>
          <div className="container-login">
            <div className="login_from">
              <div className="login_rs">
                <div className="logo_login">
                  <img src={logo} alt="logo" />
                </div>
                <h3>Login</h3>
                <form>
                  <div className="login_in">
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <button type="button" className="w-100 btn btn-primary mt-4"  onClick={dashboard}>
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
