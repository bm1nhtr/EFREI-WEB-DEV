import { type FC, type ReactNode } from 'react';

type SectionProps = {
  title: string;
  children: ReactNode;
};

const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
