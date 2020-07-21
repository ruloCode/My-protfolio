/* eslint-disable no-use-before-define */
import React, { useContext, useState } from 'react';
import gql from 'graphql-tag';
import { Form, Button } from 'semantic-ui-react';

import { useMutation } from '@apollo/react-hooks';
import { useForm } from '../../hooks/useForm';

import { AuthContext } from '../../context/auth';

const Login = (props) => {
  const context = useContext(AuthContext);
  console.log(context);
  const initialState = {
    username: '',
    password: '',
  };
  const [errors, setErrors] = useState({});
  const { onChange, onSubmit, values } = useForm(loginUserCallback, initialState);
  const LOGIN_USER = gql`
    mutation login(
      $username: String!
      $password: String!
    ) {
      login(
          username: $username
          password: $password
      ) {
        id email username createdAt token
      }
    }
  `;
  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
      props.history.push('/upload');

    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });
  function loginUserCallback() {
    loginUser();
  }
  return (
    <div className='login'>
      <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
        <Form.Input
          label='Usuario'
          placaholder='Username...'
          name='username'
          type='text'
          value={values.username}
          error={!!errors.username}
          onChange={onChange}
        />
        <Form.Input
          label='Contraseña'
          placaholder='Password...'
          name='password'
          type='password'
          value={values.password}
          error={!!errors.password}
          onChange={onChange}
        />
        <Button type='submit' primary>
          Iniciar sesión
        </Button>
      </Form>
      <div className='login__errors'>
        {Object.keys(errors).length > 0 && (
          <div className='ui error message'>
            <ul className='list'>
              {Object.values(errors).map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
