import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Typography from "../components/common/typography";
import useLoggedUserForbidden from "../hooks/useLoggedUserForbidden";

const LoginPage = () => {
  const formRef = useRef();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useLoggedUserForbidden()

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(formRef.current);

    const email = data.get("email");
    const password = data.get("password");

    const body = {
      email,
      password,
    };

    console.log(body);
    const request = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
    const response = await request.json();
    if(response.error === true){
        setError(response.message)
    } else {
        dispatch(login({ email: email, jwt: response.jwt }));
        navigate("/home");
    }
    
  };

  return (
    <div className="bg-white min-h-screen">
      <div
        style={{
          marginBottom: "20px",
        }}
        className="bg-primary py-6 rounded-b-lg"
      >
        <div className="flex justify-center">
          <img
            src="/images/Medika.png"
            alt="Main Logo"
            style={{ width: "90px", height: "25px", marginRight: "0px" }}
          />
          <img
            src="/images/Frame18.png"
            alt="Second Logo"
            style={{
              width: "20px",
              height: "20px",
              marginLeft: "0px",
              marginBottom: "5px",
            }}
          />
        </div>
      </div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        style={{
          padding: "20px",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
        }}
        className="sm:w-11/12 mx-auto my-0"
      >
        {location?.state?.logMessage && <Typography tag={'p'} variant="primary" customClasses={'pb-2 lg:text-base'}><i className="fa-solid fa-right-to-bracket"></i> x{location.state.logMessage}</Typography>}

        {error && <Typography tag={'p'} variant="accentuary" customClasses={'pb-2 lg:text-base'}><i className="fa-solid fa-triangle-exclamation"></i> {error}</Typography>}
        <div style={{ marginBottom: "10px" }}
          className="flex flex-col"
        >
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            id="email"
            required
            placeholder="Email"
            style={{ marginBottom: "5px" }}
            className="placeholder:text-base placeholder:text-black focus:outline-none border-b border-[#B7B7B7] bg-white pr-4 py-2.5"
          />
        </div>
        {error && <p>{error}</p>}
        <div style={{ marginBottom: "10px" }}
          className="flex flex-col"
        >
          <label htmlFor="password">Mot de passe</label>
          <input
            name="password"
            type="password"
            id="password"
            required
            placeholder="Mot de passe"
            style={{ marginBottom: "5px" }}
            className="placeholder:text-base placeholder:text-black focus:outline-none border-b border-[#B7B7B7] bg-white pr-4 py-2.5"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            style={{
              backgroundColor: "#FF7F00",
              color: "#ffffff",
              border: "none",
              borderRadius: "20px",
              padding: "8px 20px",
              cursor: "pointer",
              fontSize: "18px",
              marginTop: "10px",
              transition: "background-color 0.3s ease",
              width: "180px",
              height: "40px",
              textAlign: "center",
            }}
          >
            Connexion
          </button>
        </div>

        <Typography tag={"p"} customClasses={"mt-4 text-center lg:text-base"}>
          Pas encore de compte ?{" "}
          <Link to="/register" className="text-primary">
            Inscrivez vous !
          </Link>
        </Typography>
      </form>
    </div>
  );
};

export default LoginPage;
