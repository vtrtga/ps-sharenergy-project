/* eslint-disable mocha/no-async-describe */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { Response } from 'superagent';
import app from '../../app';
import ICustomer from '../../Interfaces/ICustomer';
import tokenGenerator from '../../utils/TokenGenerator';
import customerArr from './mocks/CustomersMock';

chai.use(chaiHttp);

describe('Testing customer route', function () {
  let chaiHttpResponse: Response;

  const customerOutput = {
    id: '63b875c6a8fc92f32f7d7ec7',
    birthDate: '11/02/1979',
    gender: 'female',
    email: 'camila@serrano.com',
    cpf: '423.296.910-17',
    phone: '11-99921-4321',
    address: 'Rua 24, casa 1000, Jardim das Palmeiras',
  };

  const customerInput: ICustomer = {
    name: 'Camila Serrano',
    birthDate: '11/02/1979',
    gender: 'female',
    email: 'camila@serrano.com',
    cpf: '423.296.910-17',
    phone: '11-99921-4321',
    address: 'Rua 24, casa 1000, Jardim das Palmeiras',
  };

  it('Should create a customer', async function () {
    sinon.stub(Model, 'create').resolves(customerOutput);

    const token = tokenGenerator('desafiosharenergy2');

    chaiHttpResponse = await chai
      .request(app)
      .post('/customer')
      .set('authorization', token)
      .send(customerInput);

    expect(chaiHttpResponse.status).to.be.eq(201);
    sinon.restore();
  });

  it('Must return an customers array', async function () {
    sinon.stub(Model, 'find').resolves(customerArr);
    const token = tokenGenerator('desafiosharenergy2');

    chaiHttpResponse = await chai
      .request(app)
      .get('/customer')
      .set('authorization', token);

    expect(chaiHttpResponse.status).to.be.eq(200);
    sinon.restore();
  });

  it('Must return an authorization error', async function () {
    sinon.stub(Model, 'find').resolves();

    chaiHttpResponse = await chai
      .request(app)
      .get('/customer');
    expect(chaiHttpResponse.status).to.be.eq(401);
  });
});