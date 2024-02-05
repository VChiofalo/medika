import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../store/slices/userSlice';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const formRef = useRef();
    const [error, setError] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData(formRef.current);

        const email = data.get('email');
        const password = data.get('password');

        const body = {
            email,
            password
        }

        console.log(body);
        const request = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(body)
        })
        const response = await request.json();
        console.log(response)
        dispatch(login({email : email, jwt:response.jwt}))
        navigate("/home")
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
    }}>Connexion</button>
    
            <Link to="/register">          
            <button style={{
                    backgroundColor: '#6FCF97',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '6px 15px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    marginTop: '10px',
                    transition: 'background-color 0.3s ease',
                }}>Inscription</button>
            </Link>
            </form>

        </div>
    );
       
}

export default LoginPage;


