import React from 'react'

const Input = ({ value, onChange, name, label, error, type }) => {
    return (
        <div className="form-group mx-sm-5">
            <label htmlFor="username">{label}</label>
            <input
                value={value}
                onChange={onChange}
                name={name}
                id={name}
                type={type}
                className="form-control"
            />
            {error && <div className='alert alert-danger'>{error}</div>}
        </div>
    );
}

export default Input;