import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';




const Register = () => {

    const [error, setError] = useState(" ")
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/home';
    const { signInUsingGoogle, setIsLoading, signUpUsingEmail } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();


    // registation using email and password 
    const onSubmit = data => {
        // setting email and password
        if (data.password.length < 6) {
            setError('Password must be at least 6 character long')
            return;
        }
        signUpUsingEmail(data.email, data.password)
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

    // google log in functiopn
    const handelGoogleSignin = () => {
        signInUsingGoogle()
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
                <h2 className="text-start mx-md-5 px-md-5">Registation</h2>
                {/* registation form */}
                <form className="mx-md-5 px-md-5 text-start" onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control my-4 w-50" type="email" placeholder="e-mail" {...register("email", { required: true })} />
                    <div className="text-start">
                        {errors.email && <span className="text-start error">This field is required.</span>}
                    </div>

                    <input className="form-control my-4 w-50" type="password" placeholder="password" {...register("password", { required: true })} />

                    <div className="text-start">
                        {errors.password && <span className="text-start error">This field is required.</span>}
                    </div>
                    <div className="text-start text-danger">
                        {error}
                    </div>

                    <input className="w-50 custom-button" type="submit" />
                </form>
                <div className="text-start my-4 mx-md-5 px-md-5">
                    <button onClick={handelGoogleSignin} className="custom-button">Log in with google</button>
                    <br />
                    <Link style={{ textDecoration: "none" }} to="/login">Already-Registered?</Link>
                </div>
            </Container>
        </div>
    );
};

export default Register;