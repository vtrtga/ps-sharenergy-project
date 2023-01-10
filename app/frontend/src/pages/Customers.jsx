/* eslint-disable max-len */
import React, { useState } from 'react';
import Button from '../components/Button';
import GenericSelectInput from '../components/GenericSelectInput';
import Input from '../components/Input';
import Nav from '../components/Nav';

function Customers() {
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    cpf: '',
    age: '',
  });

  const handleOnNewCustomer = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNewCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(newCustomer);
  };

  const opt = ['Select gender', 'male', 'female', 'non binary'];
  return (
    <div>
      <Nav />
      <form className="flex md: m-auto">
        <section className="md: mx-auto mt-8 shadow-md rounded-md p-5">
          <Input placeHolder="Name" name="name" onChange={ handleOnNewCustomer } />
          <Input placeHolder="Email" name="email" onChange={ handleOnNewCustomer } />
          <Input placeHolder="Phone" name="phone" onChange={ handleOnNewCustomer } />
          <Input placeHolder="CPF" name="cpf" onChange={ handleOnNewCustomer } />
          <Input placeHolder="Address" name="address" onChange={ handleOnNewCustomer } />
          <GenericSelectInput
            options={ opt }
            name="gender"
            onChange={ handleOnNewCustomer }
          />
          <Button text="Register" />
        </section>
      </form>
    </div>
  );
}

export default Customers;
