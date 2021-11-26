import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

// taking appointment page
const Appointment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

    };

    const { user } = useAuth();
    return (
        <div className="py-5">
            <Container className="mx-md-5 px-md-5 my-5">
                <h2 className="text-start mx-md-5 px-md-5">Book Your Appointment</h2>
                <form className=" mx-md-5 px-md-5 text-start" onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control my-4 w-50" defaultValue={user.displayName} placeholder="name"  {...register("name")} />

                    <input className="form-control my-4 w-50" defaultValue={user.email} placeholder="e-mail" {...register("email", { required: true })} />
                    <input className="form-control my-4 w-50" placeholder="address" {...register("address", { required: true })} />
                    <input className="form-control my-4 w-50" placeholder="city" {...register("city", { required: true })} />
                    <input className="form-control my-4 w-50" placeholder="phone" {...register("phone", { required: true })} />
                    <input className="form-control my-4 w-50" placeholder="required-service" {...register("service", { required: true })} />

                    {errors.email && <span className="error">This field is required</span>}

                    <input className="w-50 my-4 custom-button" type="submit" />
                </form>
            </Container>
        </div>
    );

};

export default Appointment;