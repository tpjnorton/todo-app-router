import { ModeToggle } from 'components/ui/mode-toggle';
import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex items-center justify-between mx-auto my-0 max-w-2xl py-3">
      <h1 className="text-primary">Todo App</h1>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
