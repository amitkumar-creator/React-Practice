import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';



function LoginPage() {

    const navigate = useHistory();

    const [userDetails, setUserDetails] = useState({
        userName: '',
        password: ''
    });

    const openRegistrationPage = () => {
        navigate.push('/registration');
    };

    const handleInput = (event) => {
        event.preventDefault();
        const value = event.target.value;
        const name = event.target.name;
        setUserDetails(prevState => ({ ...prevState, [name]: value }));
    };

    const handleLoginUser = (event) => {
        const storedData = localStorage.getItem('userDetails');
        event.preventDefault();

        console.log(JSON.parse(storedData).email);

        if (userDetails.userName === JSON.parse(storedData).email && userDetails.password === JSON.parse(storedData).mobile) {
            navigate.push('/dashboard');
        }
    };


    return (
        <Fragment>
            <div className='container loginPage'>
                <h1>Login</h1>
                <label>UserName</label>
                <input
                    type="text"
                    className='form-control inputStyle'
                    onChange={handleInput}
                    name="userName"
                    value={userDetails.userName}
                />
                <label>Password</label>
                <input
                    type="password"
                    className='form-control inputStyle'
                    onChange={handleInput}
                    name="password"
                    value={userDetails.password}
                />

                <div className='btn-group'>
                    <button
                        className='btn-primary' onClick={handleLoginUser}>Login</button>
                    <button
                        className='signup-btn'
                        onClick={openRegistrationPage}>Signup</button>
                </div>

            </div>
        </Fragment>
    );
}

export default LoginPage;
