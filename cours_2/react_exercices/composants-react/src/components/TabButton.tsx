import { type FC, type ReactNode } from 'react';

type TabButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

const TabButton: FC<TabButtonProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default TabButton;
