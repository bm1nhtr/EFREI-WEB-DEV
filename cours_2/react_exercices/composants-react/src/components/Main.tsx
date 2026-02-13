import { type FC } from 'react';
import Section from './Section';

const Main: FC = () => {
  return (
    <main>
      <Section title="À propos">
        <p>Dans cet exercice nous allons jouer avec le principe de composant.</p>
        <p>Les composants sont très utiles dans le développement web moderne.</p>
      </Section>

      <Section title="A la fin de ce cours">
        <p>Le JSX et les composants n'auront plus aucun secrets pour vous !</p>
      </Section>
    </main>
  );
};

export default Main;
