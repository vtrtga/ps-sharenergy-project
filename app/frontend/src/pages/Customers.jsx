/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import ButtonDelete from '../components/ButtonDelete';
import GenericSelectInput from '../components/GenericSelectInput';
import Input from '../components/Input';
import Nav from '../components/Nav';
import { getMethod, postMethod } from '../services/usersAndCustomers';

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    birthDate: '',
    gender: '',
    cpf: '',
  });

  useEffect(() => {
    const fetchCustomers = async () => {
      await getMethod('/customer').then((res) => setCustomers(res));
      setIsLoading(false);
    };

    fetchCustomers();
  }, []);

  const handleOnNewCustomer = (event) => {
    const { name, value } = event.target;
    setNewCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const requestRegister = async () => {
    try {
      const minLength = 3;
      if (Object.values(newCustomer).length < minLength) {
        throw new Error('Empty required input');
      }
      await postMethod('/customer', newCustomer);
    } catch (e) {
      setError('All fields must be filled');
      console.log(e);
    }
  };

  const opt = ['male', 'female', 'non binary'];
  const tableHead = ['Name', 'Birth date', 'Email', 'Phone', 'Address', 'Gender', 'CPF'];
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
          <Input placeHolder="Birth date" name="birthDate" onChange={ handleOnNewCustomer } />
          <GenericSelectInput
            options={ opt }
            name="gender"
            text="Select gender"
          />
          {
            error ? <p className="md: text-red-900 text-base text-center m-2">{ error }</p> : null
          }
          <Button text="Register" onClick={ requestRegister } />
        </section>
      </form>
      {
        isLoading ? (<p>Loading...</p>)
          : (
            <table>
              <thead>
                <tr>
                  {
                    tableHead.map((text, i) => (
                      <th key={ i }>{ text }</th>
                    ))
                  }
                </tr>
              </thead>
              <tbody>

                {
                  customers.map((c, i) => (
                    <tr key={ i }>
                      <td>{ c.name }</td>
                      <td>{ c.birthDate }</td>
                      <td>{ c.email }</td>
                      <td>{ c.phone }</td>
                      <td>{ c.address }</td>
                      <td>{ c.gender }</td>
                      <td>{ c.cpf }</td>
                      <td>{ c.age }</td>
                      <td><ButtonDelete deleteId={ c.id } /></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          )
      }
    </div>
  );
}

export default Customers;
