import React, { useState } from 'react';
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

  const opt = ['male', 'female', 'non binary'];
  return (
    <div>
      <Nav />
      <section>
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
      </section>
    </div>
  );
}

export default Customers;
