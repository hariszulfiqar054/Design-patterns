const LocalStorage = require('./LocalStorage');

const getUser = LocalStorage.getItem('user');

if (getUser) {
  console.log('User found');
  console.log(getUser);
  LocalStorage.clear();
} else {
  LocalStorage.setItem('user', 'John Doe');
  console.log('User created');
}
