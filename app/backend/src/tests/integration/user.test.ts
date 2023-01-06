import chai, { expect } from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import { Model } from 'mongoose';
import app from '../../app';
import { invalidCretendialsMock, userMock } from './mocks/userMock';

chai.use(chaiHttp);

describe('Testing user route', function () {
  let chaiHttpResponse;
  it('Test if is possible to login', async function () {
    sinon.stub(Model, 'findOne').resolves(userMock);

    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        username: 'desafiosharenergy',
        password: 'sh@r3n3rgy',
      });

    expect(chaiHttpResponse.status).to.be.eq(200);
    sinon.restore();
  });

  it('Test if is not possible to login with invalid credentials', async function () {
    sinon.stub(Model, 'findOne').resolves();

    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send(invalidCretendialsMock);

    expect(chaiHttpResponse.status).to.be.eq(401);
  });
});