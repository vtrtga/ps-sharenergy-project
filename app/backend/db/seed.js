const database = 'PSApp';
const userCollection = 'user';
const customerCollection = 'customer';

use(database);

db.createCollection(userCollection);
db.createCollection(customerCollection);

db.user.drop();
db.customer.drop();

db.customer.insertMany([
  {
    _id: "63b6e03529c3996f0ab2ab60",
    name: "Mauricio Mattar",
    gender: "male",
    phone: "19-99962-6262",
    email: "mauricio@mattar.com",
    cpf: "874.168.620-94",
    address: 'Rua 20, casa 1102, Jardim das Flores',
  },
  {
    _id: "63b6e0d13b77a6fbc6bdeae9",
    name: "Karina Silveira",
    gender: "female",
    phone: "11-99922-1234",
    email: "karina@silveira.com",
    cpf: "349.821.020-31",
    address: 'Rua 32, casa 9, Parque dos Jabutis',
  },
  {
    _id: "63b6e1c901da8a7bd69001f7",
    name: "Camila Serrano",
    gender: "female",
    phone: "11-99921-4321",
    email: "camila@serrano.com",
    cpf: "423.296.910-17",
    address: 'Rua 24, casa 1000, Jardim das Palmeiras',
  }
])

/*
 id?: string | undefined;
  birthDate: string;
  name: string;
  gender?: string;
  phone: string;
  email: string;
  cpf: string;
  address: string;
*/

db.user.insertMany([
  {
    _id: "63b6dca59536b3acfca82fa0",
    name: "Joe Smith",
    username: "desafiosharenergy",
    password: "sh@r3n3rgy",
    birthDate: "10/02/1994",
    gender: "female"
  },
  {
    _id: "63b6dcb559c07d581bbe043e",
    name: "Johann Smith",
    username: "desafiosharenergy2",
    password: "sh@r3n3rgy2",
    birthDate: "10/02/1994",
    gender: "male"
  }
]);