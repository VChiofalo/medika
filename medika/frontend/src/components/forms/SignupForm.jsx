import { useRef, useState } from 'react';

const SignupForm = () => {
    const formRef = useRef();
    const [error, setError] = useState(null);

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

        console.log(body);
        const request = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(body)
        })
        const response = await request.json();
        console.log(response)
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', marginTop: '50px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', width: '60%', height: '60px', backgroundColor: '#6FCF97', borderRadius: '10px' }}>
                <img src="/images/Medika.png" alt="Main Logo" style={{ width: '90px', height: '25px', marginRight: '0px' }} />
                <img src="/images/Frame18.png" alt="Second Logo" style={{ width: '20px', height: '20px', marginLeft: '0px', marginBottom: '5px' }} />
            </div>
            <form ref={formRef} onSubmit={handleSubmit} style={{
                width: '300px',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        name="firstname"
                        type="text"
                        id="firstName"
                        required
                        placeholder="Prénom"
                        style={{ marginBottom: '5px' }}
                    />
                    <hr style={{ margin: '0' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        name="lastname"
                        type="text"
                        id="lastName"
                        required
                        placeholder="Nom"
                        style={{ marginBottom: '5px' }}
                    />
                    <hr style={{ margin: '0' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        required
                        placeholder="Email"
                        style={{ marginBottom: '5px' }}
                    />
                    <hr style={{ margin: '0' }} />
                </div>
                {error && <p>{error}</p>}
                <div style={{ marginBottom: '10px' }}>
                    <input
                        name="password"
                        type="password"
                        id="password"
                        required
                        placeholder="Mot de passe"
                        style={{ marginBottom: '5px' }}
                    />
                    <hr style={{ margin: '0' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        name="confirmPassword"
                        type="password"
                        id="confirmPassword"
                        required
                        placeholder="Confirmer le mot de passe"
                        style={{ marginBottom: '5px' }}
                    />
                    <hr style={{ margin: '0' }} />
                </div>
                <button type="submit" style={{ 
    backgroundColor: '#FF7F00', 
    color: '#ffffff',
    border: 'none',
    borderRadius: '20px',
    padding: '8px 20px',
    cursor: 'pointer',
    fontSize: '18px',
    marginTop: '10px',
    transition: 'background-color 0.3s ease',
    width: '180px',
    height: '40px',
    textAlign: 'center' 
}}>Enregistrer</button>

            </form>
        </div>
    );
    
}

export default SignupForm;
