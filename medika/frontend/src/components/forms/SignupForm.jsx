import {useRef, useState} from 'react';

const  SignupForm = () => {
 const formRef = useRef();
 const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formRef.current);

        const data = new FormData(formRef.current);
        const firstname = data.get('firstname');
        const lastname = data.get('lastname');
        const email = data.get('email');
        const password = data.get('password');
        const confirmpassword = data.get('confirmPassword');

        if(password !== confirmpassword) {

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
        const request = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(body)
        })
        const response = await request.json();
        console.log(response)
    };

        return (
            <form ref={formRef} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">Prénom:</label>
                    <input
                        name="firstname"
                        type="text"
                        id="firstName"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Nom:</label>
                    <input
                        name="lastname"
                        type="text"
                        id="lastName"
               
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                   
                        required
                    />
                </div>
                {error && <p>{error}</p>}
                <div>
                    <label htmlFor="password">Mot de passe:</label>
                    <input
                        name="password"
                        type="password"
                        id="password"
                     
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirmer le mot de passe:</label>
                    <input
                        name="confirmPassword"
                        type="password"
                        id="confirmPassword"
                   
                        required
                    />
                </div>
                <button type="submit">Inscription</button>
            </form>
        );
    
}

export default SignupForm;
