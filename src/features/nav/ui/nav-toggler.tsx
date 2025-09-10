import { FC, useState } from 'react';

import { NavIcon, CloseIcon } from '@shared/icons';

const NavToggler: FC = () => {
  const [isNavHidden, setNavHidden] = useState(false);

  return (
    <button
      className="btn-icon text-sky-950 px-2 py-0 lg:hidden"
      type="button"
      onClick={() => setNavHidden(!isNavHidden)}
    >
      {isNavHidden ? <CloseIcon /> : <NavIcon />}
    </button>
  )
};

export default NavToggler;
