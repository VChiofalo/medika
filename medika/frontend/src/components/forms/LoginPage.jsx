import React from 'react';
import { Link } from 'react-router-dom';
class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', this.state.email);
        console.log('Password:', this.state.password);
    };

    handleSignup = (event) => {
        event.preventDefault();
        // Logique pour rediriger l'utilisateur vers la page d'inscription ou effectuer d'autres actions
        console.log("Redirection vers la page d'inscription...");
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe:</label>
                    <input
                        name="password"
                        type="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Se connecter</button>
                    <br /> {/* Ajout d'un saut de ligne*/}
                    <div className="continue-button bg-green-500 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg">
                        <Link to="/register">Inscription</Link>
                    </div>
                    
                    <button onClick={this.handleSignup}>Inscription</button>
                    
                </div>
            </form>
        );
    }
}

export default LoginPage;
