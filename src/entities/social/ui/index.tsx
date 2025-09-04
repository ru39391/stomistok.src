import { FC } from 'react';

import type { ISocialItem } from '../types';

import './index.css';

const SocialItem: FC<ISocialItem> = ({ children, url }) => <a className="social-item" href={url} target="_blank">{children}</a>;

export default SocialItem;
