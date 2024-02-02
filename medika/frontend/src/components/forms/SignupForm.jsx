import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleFirstNameChange = (event) => {
        this.setState({ firstName: event.target.value });
    };

    handleLastNameChange = (event) => {
        this.setState({ lastName: event.target.value });
    };

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };

    handleConfirmPasswordChange = (event) => {
        this.setState({ confirmPassword: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('First Name:', this.state.firstName);
        console.log('Last Name:', this.state.lastName);
        console.log('Email:', this.state.email);
        console.log('Password:', this.state.password);
        console.log('Confirm Password:', this.state.confirmPassword);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="firstName">Prénom:</label>
                    <input
                        name="firstname"
                        type="text"
                        id="firstName"
                        value={this.state.firstName}
                        onChange={this.handleFirstNameChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Nom:</label>
                    <input
                        name="lastname"
                        type="text"
                        id="lastName"
                        value={this.state.lastName}
                        onChange={this.handleLastNameChange}
                        required
                    />
                </div>
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
                    <label htmlFor="confirmPassword">Confirmer le mot de passe:</label>
                    <input
                        name="confirmPassword"
                        type="password"
                        id="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleConfirmPasswordChange}
                        required
                    />
                </div>
                <button type="submit">Inscription</button>
            </form>
        );
    }
}

export default SignupForm;
