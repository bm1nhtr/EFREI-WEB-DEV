import reactLogo from './assets/react.svg';

export const CORE_CONCEPTS = [
  {
    image: reactLogo,
    title: 'Components',
    description:
      'Le concept de base de toutes les applications web modernes, on créé les interfaces en combinant les composants.',
  },
  {
    image: reactLogo,
    title: 'JSX',
    description:
      "Un mélange de HTML et de Javascript permettant une meilleur flexibilité dans l'affichage.",
  },
  {
    image: reactLogo,
    title: 'Props',
    description:
      "Permet aux composant d'être configurable et réutilisable en leurs injectant des données.",
  },
  {
    image: reactLogo,
    title: 'State',
    description:
      "Données du composants qui une fois changés déclenche un nouveau rendu du composant et une maj de l'ui.",
  },
];

export const EXAMPLES = {
  Components: {
    title: 'Components',
    description:
      'Les composants sont le cœur de React. Ils permettent de découper l\'UI en blocs réutilisables.',
    code: `function Welcome() {
  return <h1>Hello!</h1>;
}`,
  },
  JSX: {
    title: 'JSX',
    description:
      'Le JSX est une syntaxe qui mélange HTML et JavaScript. Les accolades permettent d\'insérer des expressions.',
    code: `<div>
  <h1>{title}</h1>
  <p>{description}</p>
</div>`,
  },
  Props: {
    title: 'Props',
    description:
      'Les props permettent de passer des données d\'un composant parent à un composant enfant.',
    code: `function Card({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}`,
  },
  State: {
    title: 'State',
    description:
      'Le state est une donnée qui change au fil du temps. useState déclenche un nouveau rendu quand il change.',
    code: `const [count, setCount] = useState(0);
return (
  <button onClick={() => setCount(c => c + 1)}>
    Count: {count}
  </button>
);`,
  },
};
