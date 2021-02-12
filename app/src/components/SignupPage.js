/* eslint-disable no-console */
import React, { Fragment, useState } from 'react';
import Input from './Input';

function SignupPage() {
  const apiURL = 'https://lab-api-bq.herokuapp.com/';
  const apiUsers = `${apiURL}/users`;
  const apiAuth = `${apiURL}/auth`;

  // useEffect
  //   const signupNewWorker = new Request(apiUsers, {
  //     method: 'POST',
  //     body: {
  //       name: workerName.value,
  //       email: workerEmail.value,
  //       role: workerFunction,
  //       restaurant: 'Azmina',

  //     },
  //   });
  //   apiUsers.fetch();
  // };

  // fetch(apiUsers, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: {
  //     name: workerName,
  //     email: workerEmail,
  //     role: workerFunction,
  //     restaurant: 'Azmina',

  //   },
  // });

  const [workerName, setWorkerName] = useState('');
  const [workerEmail, setWorkerEmail] = useState('');
  const signupNewWorker = new Request;
  return (
    <Fragment>
      <form>
        <div>
          <p>Nome</p>
          {/* <input type="text" id="worker-name" /> */}
          <Input
            name="workerName"
            placeholder="Digite seu nome"
            value={workerName}
            onChange={(event) => {
              setWorkerName(event.target.value);
              console.log(workerName);
            }}
            onSubmit={(event) => {
              event.preventDefault();
              fetch(apiUsers, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: {
                  name: workerName,
                  // email: workerEmail,
                  // role: workerFunction,
                  restaurant: 'Azmina',
                },
              })
                .then((response) => response.json())
                .then((data) => console.log(data));
            }}
          />
        </div>
        <div>
          <p>E-mail</p>
          {/* <input type="email" id="worker-email" /> */}
          <Input
              name="workerEmail"
              placeholder="Digite seu email"
              value={workerEmail}
              onChange={(e) => {
                setWorkerEmail(e.target.value);
                console.log(setWorkerEmail);
              }}
              onSubmit={(e) => {
                  e.preventDefault();
                  (apiAuth, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: {
                      name: workerName.value,
                      email: workerEmail.value,
                      role: workerFunction,
                      restaurant: 'Azmina',
                    },
                });
                apiAuth.fetch();
              };
            }
        /> 
      </div>
        <div>
          <p>Função</p>
          <input type="radio" id="salon-input" value="salon" name="function" />
          <label htmlFor="salon-input">Salão</label>
          <br />
          <input type="radio" id="kitchen-input" value="kitchen" name="function" />
          <label htmlFor="kitchen-input">Cozinha</label>
        </div>
        <div>
          <p>Senha</p>
          <input type="password" />
        </div>
        <button type="submit" id="submit-form-button">Cadastrar</button>
      </form>
    </Fragment>
  );
}

export default SignupPage;
