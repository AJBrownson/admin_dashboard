import React, { useState } from 'react';
import LoginForm from './Component/Login/LoginForm';

function App() {
  const adminUser = {
    email: 'adminuser@admin.com',
    password: '12345',
  };

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const Signin = (form) => {
    console.log(form);

    if (
      form.email === adminUser.email &&
      form.password === adminUser.password
    ) {
      console.log('logged in');

      setUser({
        email: form.email,
        password: form.password,
      });
    } else {
      console.log('details are incorrect');
      setError('Incorrect Details');
    }
  };
  const Signout = () => {
    console.log('logout');
  };

  return (
    <div>
      {user.email !== '' ? (
        //Dashbord

        <h1> Welcome </h1>
      ) : (
        <LoginForm Signin={Signin} error={error} />
      )}
    </div>
  );
}

export default App;
