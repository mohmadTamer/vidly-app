import React, { Component } from 'react';
import { Joi } from 'joi-browser';

class Form extends Component {
    state = {
        data: {},
        errors: {}
    };
    validate = () => {
        const result = this.schema.validate(this.state.data, this.schema, { abortEarly: false })
        console.log(result);

        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;

    }

    handelForm = (event) => {
        event.preventDefault();
        const errors = this.validate()
        this.setState({ errors: errors || {} })

        if (errors) return;
        this.doSubmit();
    }

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value;

        this.setState({ data, errors });
    };


}

export default Form;