import { FC } from 'react';

import { NavIcon, CloseIcon } from '@shared/icons';
import type { INavToggler } from '../types';

const NavToggler: FC<INavToggler> = ({ isNavHidden, handleClick }) => <button className="btn-icon text-sky-950 px-2 py-0 lg:hidden" type="button" onClick={handleClick}> {isNavHidden ? <NavIcon /> : <CloseIcon />}</button>;

export default NavToggler;
