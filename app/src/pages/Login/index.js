/* eslint-disable no-console */
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import logo from '../../images/logo-circulo.png';

export default function Login() {
  const apiURL = 'https://lab-api-bq.herokuapp.com';
  const apiAuth = `${apiURL}/auth`;
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const authUser = (event) => {
    event.preventDefault();

    const authOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailLogin,
        password: passwordLogin,
      }),
    };

    fetch(apiAuth, authOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <Fragment>
      <h1>
        <img className='logo-login' src={logo} alt='Logo Hamburgueria Ipê' />
      </h1>
      <form className='login-form' onSubmit={authUser}>
        <Input
          divWrapClassName='label-input-wrap'
          labelHtmlFor='login-email'
          labelClassName='label-for-input'
          labelText='E-mail'
          inputRequired
          inputType='email'
          inputName='login-email'
          inputValue={emailLogin}
          inputPlaceholder='Insira aqui seu e-mail'
          inputClassName='input-text'
          inputOnChange={(event) => setEmailLogin(event.target.value)}
        />

        <Input
          divWrapClassName='label-input-wrap'
          labelHtmlFor='login-password'
          labelClassName='label-for-input'
          labelText='Senha'
          inputRequired
          inputType='password'
          inputName='login-password'
          inputValue={passwordLogin}
          inputPlaceholder='Insira aqui sua senha'
          inputClassName='input-text'
          inputOnChange={(event) => setPasswordLogin(event.target.value)}
        />

        <Button
          type='submit'
          className='button-base button-primary'
          buttonText='Entrar'
        />
      </form>

      <Link to="/cadastro">
        <Button
          type='button'
          className='button-base button-secondary'
          buttonText='Cadastre-se'
        />
      </Link>

      <Footer />
    </Fragment>
  );
}
