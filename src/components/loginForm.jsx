import React from 'react';
import Input from './commen/input';
import Form from './commen/form';
import { Joi } from 'joi-browser';


class LoginForm extends Form {
    // username = React.createRef();
    state = {
        data: { username: "", password: "" },
        errors: {}
    };
    schema = {
        username: Joi.string()
            .required()
            .label("Username"),
        password: Joi.string()
            .required()
            .label("Password")
    };


    doSubmit = () => {
        // call server

    }

    render() {
        const { account, errors } = this.state;
        return (
            <div className='container mt-5'>
                <h1>Login</h1>
                <form onSubmit={this.handelForm}>
                    <Input
                        label="Username"
                        name="username"
                        type="text"
                        value={account.username}
                        onChange={this.handleChange}
                        error={errors.username}
                    />
                    <Input
                        label="Password"
                        name="password"
                        type="password"
                        value={account.password}
                        onChange={this.handleChange}
                        error={errors.password}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;