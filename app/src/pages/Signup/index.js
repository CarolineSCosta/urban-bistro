/* eslint-disable no-console */
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-horizontal.png';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import InputRadio from '../../components/InputRadio';
import Header from '../../components/Header';

export default function Signup() {
  const apiURL = 'https://lab-api-bq.herokuapp.com';
  const apiUsers = `${apiURL}/users`;
  const [workerName, setWorkerName] = useState('');
  const [workerEmail, setWorkerEmail] = useState('');
  const [workerRole, setWorkerRole] = useState('');
  const [workerPassword, setWorkerPassword] = useState('');
  const [workerConfirmPassword, setWorkerConfirmPassword] = useState('');
  const [equalPasswords, setEqualPasswords] = useState(true);

  const registerUser = (event) => {
    event.preventDefault();

    if (workerPassword !== workerConfirmPassword) {
      setEqualPasswords(false);
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: workerName,
        email: workerEmail,
        role: workerRole,
        restaurant: 'hamburgueria-ipe',
        password: workerPassword,
      }),
    };

    fetch(apiUsers, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <Fragment>
      <Header
        headerClassName='signup-header'
        headerLink='/'
        logoClassName='logo-signup'
        logoSrc={logo}
        subtitleClassName='subtitle-base signup-subtitle'
        subtitleText='Cadastro'
      />

      <main className='main-container-base main-container-signup'>
        <form className='form-container' onSubmit={registerUser}>
          <InputText
            divWrapClassName='label-input-wrap'
            labelClassName='label-for-input'
            labelText='Nome'
            inputRequired
            inputType='text'
            inputValue={workerName}
            inputMinLength='6'
            inputPlaceholder='Digite seu nome e sobrenome'
            inputClassName='input-text'
            inputOnChange={(event) => setWorkerName(event.target.value)}
          />

          <InputText
            divWrapClassName='label-input-wrap'
            labelClassName='label-for-input'
            labelText='E-mail'
            inputRequired
            inputType='email'
            inputValue={workerEmail}
            inputMinLength='6'
            inputPlaceholder='Digite seu email'
            inputClassName='input-text'
            inputOnChange={(event) => setWorkerEmail(event.target.value)}
          />

          <div className='label-input-wrap'>
            <p className='label-for-input'>Função</p>
            <div className='radio-buttons-wrap'>
              <InputRadio
                inputClassName='input-radio'
                inputId='role-hall'
                inputName='role'
                inputRequired
                inputValue='hall'
                inputChecked={workerRole === 'hall'}
                inputOnChange={(event) => setWorkerRole(event.target.value)}
                labelHtmlFor='role-hall'
                labelClassName='button-base label-radio'
                labelText='Salão'
              />

              <InputRadio
                inputClassName='input-radio'
                inputId='role-kitchen'
                inputName='role'
                inputRequired
                inputValue='kitchen'
                inputChecked={workerRole === 'kitchen'}
                inputOnChange={(event) => setWorkerRole(event.target.value)}
                labelHtmlFor='role-kitchen'
                labelClassName='button-base label-radio'
                labelText='Cozinha'
              />
            </div>
          </div>

          <InputText
            divWrapClassName='label-input-wrap'
            labelClassName='label-for-input'
            labelText='Senha'
            inputRequired
            inputType='password'
            inputMinLength='6'
            inputPlaceholder='Digite a senha'
            inputClassName='input-text'
            inputOnChange={(event) => setWorkerPassword(event.target.value)}
          />

          <InputText
            labelClassName='label-for-input'
            labelText='Confirmar Senha'
            inputRequired
            inputType='password'
            inputPlaceholder='Confirmar senha'
            inputClassName='input-text'
            inputOnChange={(event) => setWorkerConfirmPassword(event.target.value)}
          />

          {!equalPasswords && <p className='msg-different-passwords'>As senhas são diferentes. Tente novamente.</p>}

          <Button
            type='submit'
            className='button-base button-primary button-centered'
            buttonText='Cadastrar'
          />
        </form>

        <Link to="/">
          <Button
            type='button'
            className='button-base button-secondary'
            buttonText='Voltar'
          />
        </Link>
      </main>

      <Footer />
    </Fragment>
  );
}
