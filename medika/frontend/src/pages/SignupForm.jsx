import { useRef, useState } from "react";
import Typography from "../components/common/typography";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
<<<<<<< HEAD
  const formRef = useRef();
  const [error, setError] = useState(null);
  const [errorApi, setErrorApi] = useState(null);
  const navigate = useNavigate();
=======
    const formRef = useRef();
    const [error, setError] = useState(null);
>>>>>>> 8c312f13e7a8262c1eb2a926d069a5deebd555be

    const handleSubmit = async (event) => {
        event.preventDefault();

    const data = new FormData(formRef.current);
    const firstname = data.get("firstname");
    const lastname = data.get("lastname");
    const email = data.get("email");
    const password = data.get("password");
    const confirmpassword = data.get("confirmPassword");

        if (password !== confirmpassword) {
            setError('Les mots de passe ne sont pas identiques');
            // clear password fields in dom
            const formField = formRef.current.querySelectorAll('input[type="password"]');
            formField.forEach(field => field.value = '');
            return;
        }

        const body = {
            firstname,
            lastname,
            email,
            password
        }

    const request = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
    const response = await request.json();
    if (!response.error) {
      navigate("/login", {state: {logMessage: response.message}});
    } else if (response.error) {
      setErrorApi(response.message);
      formRef.current.querySelector('input[type="email"]').value = "";
    }
  };

  return (
    <div className="bg-white min-h-screen"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
        className="bg-primary py-6 rounded-b-lg"
      >
        <div className="flex justify-center">
            <img
              src="/images/Medika.png"
              alt="Main Logo"
              style={{ width: "90px", height: "25px"}}
              className="mx-auto my-0"
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
        <div
          style={{ marginBottom: "10px" }}
          className="flex flex-col"
        >
          <label
            className="text-sm font-Satoshi"
            htmlFor="firstname"
          >
            Prénom
          </label>
          <input
            name="firstname"
            type="text"
            id="firstName"
            required
            placeholder="Prénom"
            style={{ marginBottom: "5px" }}
            className="placeholder:text-base placeholder:text-black focus:outline-none border-b border-[#B7B7B7] bg-white pr-4 py-2.5"
          />
          
        </div>
        <div style={{ marginBottom: "10px" }} className="flex flex-col">
          <label
            className="text-sm font-Satoshi"
            htmlFor="lastname"
          >
            Nom
          </label>
          <input
            name="lastname"
            type="text"
            id="lastName"
            required
            placeholder="Nom"
            style={{ marginBottom: "5px" }}
            className="placeholder:text-base placeholder:text-black focus:outline-none border-b border-[#B7B7B7] bg-white pr-4 py-2.5"
          />
        </div>
        {errorApi && <Typography tag={'p'} variant="accentuary" customClasses={'pb-2 lg:text-base'}><i className="fa-solid fa-triangle-exclamation"></i> {errorApi}</Typography>}
        <div style={{ marginBottom: "10px" }} className="flex flex-col">
          <label className="text-sm font-Satoshi" htmlFor="email">
            Email
          </label>
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
        {error && <Typography tag={'p'} variant="accentuary" customClasses={'pb-2 lg:text-base'}><i className="fa-solid fa-triangle-exclamation"></i> {error}</Typography>}
        <div style={{ marginBottom: "10px" }} className="flex flex-col">
          <label className="text-sm font-Satoshi" htmlFor="password">
            Mot de passe
          </label>
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
        <div style={{ marginBottom: "10px" }} className="flex flex-col">
          <label className="text-sm font-Satoshi" htmlFor="confirmPassword">
            Confirmez le mot de passe
          </label>
          <input
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            required
            placeholder="Confirmer le mot de passe"
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
              Enregistrer
            </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
