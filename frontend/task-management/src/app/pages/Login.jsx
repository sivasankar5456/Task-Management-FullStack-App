import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { Endpoints } from "../constants/endPoints";
import { routeConstants } from "../constants/routeConstants";
import { useAuth } from "../hooks/useAuth";
import { getFullUrl, services } from "../services";

function Login() {
  const { login } = useAuth();
  const [formdetails, setFormdetails] = useState({
    email: "krish@gmail.com",
    password: "password123",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleKeyPress = (e, index) => {
    if (e.key === "Enter") {
      if (index < inputRefs.current.length - 1) {
        e.preventDefault();
        inputRefs.current[index + 1].focus();
      }
    }
  };
  const handelInputChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setFormdetails({ ...formdetails, [name]: value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    services
      .Post(getFullUrl(Endpoints.LOGIN), formdetails)
      .then((respose) => {
        console.log(respose.data.token)
        if (respose.status == 200) {
          localStorage.setItem("token", respose.data.token);
          login()
          navigate(routeConstants.HOME);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);
  return (
    <div className="center-content">
      <div className="signup-container">
        <h2>Welcome Back!</h2>
        <form onSubmit={handleLogin}>
          <InputField
            value={formdetails.email}
            ref={(el) => (inputRefs.current[0] = el)}
            onKeyDown={(e) => handleKeyPress(e, 0)}
            onChange={(e) => handelInputChange(e)}
            label_name="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <InputField
            value={formdetails.password}
            ref={(el) => (inputRefs.current[1] = el)}
            onKeyDown={(e) => handleKeyPress(e, 1)}
            onChange={(e) => handelInputChange(e)}
            label_name="password"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />

          <button type="submit">Login</button>
          <p>
            Don't have an account?{" "}
            <Link to={routeConstants.SIGNUP}>Sign up here</Link>
          </p>
          {/* <p>
            <a href="#">Forgot your password?</a>
          </p> */}
        </form>
      </div>
    </div>
  );
}

export default Login;
