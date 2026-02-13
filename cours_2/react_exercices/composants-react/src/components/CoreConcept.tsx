import { type FC } from 'react';

export type CoreConceptProps = {
  title: string;
  description: string;
  image: string;
};

const CoreConcept: FC<CoreConceptProps> = ({ title, description, image }) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcept;
