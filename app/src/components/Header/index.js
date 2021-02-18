/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

export default function Header({
  headerClass,
  headerLogoLink,
  logoSrc,
  workAreaClass,
  workAreaText,
  divLogoutClass,
  workerRoleClass,
  workerRoleText,
  workerNameClass,
  workerNameText,
  buttonLogoutClass,
  buttonLogoutOnClick,
}) {
  return (
    <header className={headerClass}>
      <Link to={headerLogoLink}>
        <h1>
          <img
            className='logo-horizontal'
            src={logoSrc}
            alt='Logo Hamburgueria Ipê'
          />
        </h1>
      </Link>
      <h2 className={workAreaClass}>{workAreaText}</h2>
      <div className={divLogoutClass}>
        <p className={workerRoleClass}>{workerRoleText}</p>
        <p className={workerNameClass}>{workerNameText}</p>
        <Button
          buttonType='text'
          buttonClass={buttonLogoutClass}
          buttonOnClick={buttonLogoutOnClick}
          buttonText='Sair'
        />
      </div>
    </header>
  );
}
