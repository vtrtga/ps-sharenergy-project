import chai, { expect } from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import { Model } from 'mongoose';
import { Response } from 'superagent';
import ICustomer from '../../Interfaces/ICustomer';
// import Customer from '../../Domains/Customer';
import customerArr from './mocks/CustomersMock';
import app from '../../app';

chai.use(chaiHttp);

describe('Testing customer route', function () {
  const customerInput: ICustomer = {
    name: 'Camila Serrano',
    birthDate: '11/02/1979',
    gender: 'female',
    email: 'camila@serrano.com',
    cpf: '423.296.910-17',
    phone: '11-99921-4321',
    address: 'Rua 24, casa 1000, Jardim das Palmeiras',
  };
  // const customerOutput: Customer = new Customer(
  //   customerInput,
  // );
  
  let chaiHttpResponse: Response;

  afterEach(function () {
    return sinon.restore();
  });

  it('Should create a customer', async function () {
    sinon.stub(Model, 'create').resolves(customerInput);
    
    chaiHttpResponse = await chai
      .request(app)
      .post('/customer')
      .send(customerInput);

    expect(chaiHttpResponse.status).to.be.eq(201);
  });

  it('Must return an customers array', async function () {
    sinon.stub(Model, 'find').resolves(customerArr);

    chaiHttpResponse = await chai
      .request(app)
      .get('/customer');

    expect(chaiHttpResponse.status).to.be.eq(200);
  });
});