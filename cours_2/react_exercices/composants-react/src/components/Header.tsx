import { type FC } from 'react';
import reactLogo from '../assets/react.svg';

function getRandomString(tableau: string[]): string {
  const index = Math.floor(Math.random() * tableau.length);
  return tableau[index];
}

const TECHNOLOGIES = ['React', 'TypeScript', 'Vite', 'CSS', 'JavaScript', 'HTML'];

const Header: FC = () => {
  const tech = getRandomString(TECHNOLOGIES);
  return (
    <header>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>Bienvenue sur mon app React ALOOOOOOOOOOOOOOOOO</h1>
      <h2>Cette page utilise {tech}</h2>
    </header>
  );
};

export default Header;
