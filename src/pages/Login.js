import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as emailValidation from 'email-validator';
import getCurrenciesThunk from '../redux/actions';

export default function Login() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [disabledBtn, setDisabledBtn] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  const validateBtn = () => {
    const FIVE = 5;
    const doEmailValidation = emailValidation.validate(inputEmail);
    const dataValidation = doEmailValidation && inputPassword.length > FIVE;
    setDisabledBtn(!dataValidation);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    if (id === 'email-input') {
      setInputEmail(value);
    } else {
      setInputPassword(value);
    }
  };

  useEffect(() => validateBtn());

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getCurrenciesThunk());
    dispatch(
      { type: 'ACCOMPLISH_LOGIN',
        payload: { email: inputEmail },
      },
    );
    history.push('/carteira');
  };

  return (
    <form onSubmit={ handleSubmit }>
      <h1>Login</h1>
      <label htmlFor="email-input">
        Email:
        <input
          type="email"
          id="email-input"
          name="email-input"
          data-testid="email-input"
          value={ inputEmail }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="password-input">
        Password:
        <input
          type="password"
          id="password-input"
          name="password-input"
          data-testid="password-input"
          value={ inputPassword }
          onChange={ handleChange }
        />
      </label>
      <button
        type="submit"
        disabled={ disabledBtn }
      >
        Entrar
      </button>
    </form>
  );
}
