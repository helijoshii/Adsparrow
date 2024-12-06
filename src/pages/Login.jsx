import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import bgImg from "../assets/bg.png";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import axios from "axios";
import { setAccessToken, setLocalStorage } from "../utils/helper";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleLogin = async (obj) => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    try {
      setLoading(true);
      const response = await axios.post(`${API_BASE_URL}/login/`, obj, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);

      if (response.status === 200) {
        if (response.data.data.user_type === "Admin") {
          setAccessToken(response.data.data.token);
          setLocalStorage("user_info", {
            role: response.data.data.user_type,
            email: formData.email,
          });
          navigate("/");
        } else if (response.data.data.user_type === "Master Admin") {
          setAccessToken(response.data.data.token);
          setLocalStorage("user_info", {
            role: response.data.data.user_type,
            email: formData.email,
          });
          navigate("/master-admin");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      // errorToast(error.response.data.message);
      setErrors({
        email: error.response.data.message,
        password: error.response.data.message,
      });

      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      // Format and display errors
      const formattedErrors = result.error.format();
      setErrors({
        email: formattedErrors.email?._errors[0] || "",
        password: formattedErrors.password?._errors[0] || "",
      });
    } else if (result.success) {
      handleLogin({
        email: formData.email,
        password: formData.password,
      });
      setErrors({});
    }
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
    <>
      <div>
        <div id="particles-js" className="snow"></div>
        <div className="bg_login" style={{ backgroundImage: `url(${bgImg})` }}>
          <div className="container-login">
            <div className="login_from">
              <div className="login_rs">
                <div className="logo_login">
                  <img src={logo} alt="logo" />
                </div>
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                  <div className="login_in">
                    <div className="mb-3">
                      <input
                        type="email"
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-100 btn btn-primary mt-4"
                      disabled={loading}
                    >
                      {loading ? <div className="spinner"></div> : "Login"}
                      {/* <div className="spinner"></div> */}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
