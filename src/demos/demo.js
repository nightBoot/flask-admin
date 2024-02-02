import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

const MyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('firstName', { required: 'First name is required' })}
        label="First Name"
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
      />
      <br />
      <TextField
        {...register('lastName', { required: 'Last name is required' })}
        label="Last Name"
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
      />
      <br />
      <TextField
        {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' } })}
        label="Email"
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <br />
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </form>
  );
};

export default MyForm;
