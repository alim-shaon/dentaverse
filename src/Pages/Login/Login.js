import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Lonin.css'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUsingGoogle, setIsLoading, signInUsingEmail } = useAuth();
    const [error, setError] = useState("");

    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/home';

    // google sign in
    const handelGoogleSignin = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirectUri);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => {
                setIsLoading(false);
            })
    };

    // email and password sign in
    const onSubmit = data => {

        signInUsingEmail(data.email, data.password)
            .then((result) => {
                history.push(redirectUri);
                setError("");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => {
                setIsLoading(false);
            })

    }


    return (
        <div className="py-5">
            <Container className="mx-md-5 px-md-5 my-5">
                <h2 className="text-start mx-md-5 px-md-5">Log-In Here</h2>
                <form className=" mx-md-5 px-md-5 text-start" onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control my-4 w-50" type="email" placeholder="e-mail" {...register("email", { required: true })} />
                    <input className="form-control my-4  w-50" type="password" placeholder="password" {...register("password", { required: true })} />

                    {errors.email && <span className="error">This field is required</span>}
                    <div className="text-start text-danger">
                        {error}
                    </div>
                    <input className="w-50 custom-button" type="submit" />
                </form>
                <div className="text-start my-4 mx-md-5 px-md-5">
                    <button onClick={handelGoogleSignin} className="custom-button">Log in with google</button>
                    <br />
                    <Link style={{ textDecoration: "none" }} to="/register">New User?</Link>
                </div>
            </Container>
        </div>
    );
};

export default Login;