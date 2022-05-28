import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './Login.css';

const LoginForm = ({ Signin, error }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  // useEffect(() => {
  //   if (form.email !== ' ' && form.password !== ' ') {
  //     setFormValid(true);
  //   } else {
  //     setFormValid(false);
  //   }
  // }, [form]);

  const submitHandler = (e) => {
    e.preventDefault();

    Signin(form);
  };

  return (
    <div>
      <Container>
        <div className=' login '>
          <Form
            onSubmit={submitHandler}
            className='form p-4 p-sm-3 w-50 w-sm-50'
          >
            <h1 className='mb-3'>Admin</h1>
            {/* Error message */}
            {error !== '' ? <div className='error'>{error}</div> : ''}
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                name='email'
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                value={form.email}
              />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                name='password'
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                value={form.password}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Check me out' />
            </Form.Group>
            <Button variant='success' type='submit'>
              Login
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default LoginForm;
