import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerHeader } from './styles';

export const Header = () => {
  return (
    <ContainerHeader>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/list-tracks'>Minha Lista</Link>
          </li>
        </ul>
      </nav>
    </ContainerHeader>
  );
};
