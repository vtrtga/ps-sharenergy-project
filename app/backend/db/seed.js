
const database = 'PSApp';
const userCollection = 'user';
const customerCollection = 'customer';

use(database);

db.createCollection(userCollection);
db.createCollection(customerCollection);

db.user.drop();
db.customer.drop();

db.customer.insertMany([

])

db.user.insertMany([
  {
    "_id": "63b6dca59536b3acfca82fa0",
    "name": "Joe Smith",
    "username": "desafiosharenergy",
    "password": "sh@r3n3rgy",
    "birthDate": "10/02/1994",
    "gender": "female"
  },
  {
    "_id": "63b6dcb559c07d581bbe043e",
    "name": "Johann Smith",
    "username": "desafiosharenergy2",
    "password": "sh@r3n3rgy2",
    "birthDate": "10/02/1994",
    "gender": "male"
  }
]);