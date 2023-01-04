
const database = 'PSApp';
const collection = 'user';

use(database);

db.createCollection(collection);

db.user.drop();
db.user.insertMany([
  {
    "id": "1",
    "name": "Joe Smith",
    "username": "desafiosharenergy",
    "password": "sh@r3n3rgy",
    "birthDate": "10/02/1994",
    "gender": "female"
  },
  {
    "id": "2",
    "name": "Johann Smith",
    "username": "desafiosharenergy2",
    "password": "sh@r3n3rgy2",
    "birthDate": "10/02/1994",
    "gender": "male"
  }
]);