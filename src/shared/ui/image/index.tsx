import { FC } from 'react';

import type { IImage } from '@shared/types';

const Image: FC<IImage> = ({ alt, classMod, src }) => {
  if(!src) {
    return '';
  }

  return <img className={`img-fluid ${classMod || ''}`} src={src} alt={alt} />;
};

export default Image;
