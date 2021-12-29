import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function RegistrationForm() {

    const navigate = useHistory();

    const [inputVal, setInputVal] = useState({
        fname: '',
        email: '',
        mobile: ''
    });

    const openLoginPage = () => {
        navigate.push('/login');
    };

    const handleInput = (event) => {
        event.preventDefault();
        const value = event.target.value;
        const name = event.target.name;
        setInputVal(prevState => ({ ...prevState, [name]: value }));
    };

    const handleRegisterUser = (event) => {
        event.preventDefault();
        localStorage.setItem('userDetails', JSON.stringify(inputVal));
        setInputVal({
            fname: '',
            email: '',
            mobile: ''
        });
    };


    return (
        <>
            <div className='container loginPage'>
                <h1>Signup Page</h1>
                <label>Full Name</label>
                <input
                    type="text"
                    name="fname"
                    className='form-control inputStyle'
                    onChange={handleInput}
                    value={inputVal.fname}
                />
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    className='form-control inputStyle'
                    onChange={handleInput}
                    value={inputVal.email}
                />
                <label>Mobile</label>
                <input
                    type="number"
                    name="mobile"
                    className='form-control inputStyle'
                    onChange={handleInput}
                    value={inputVal.mobile}
                />

                <div className='btn-group'>
                    <button
                        className='btn-primary' onClick={handleRegisterUser}>Register</button>
                    <button
                        className='signup-btn'
                        onClick={openLoginPage}>Login</button>
                </div>

            </div>
        </>
    );
}

export default RegistrationForm;
