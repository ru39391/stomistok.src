import { FC } from 'react';

import { Image } from '@shared/ui';
import type { IPicture } from '@shared/types';

const Picture: FC<IPicture> = ({ thumb, ...props }) => {
  if(!thumb) {
    return <Image {...props} />;
  }

  return (
    <picture>
      <source type="image/webp" srcSet={thumb} />
      <source type="image/jpeg" srcSet={props.src} />
      <Image {...props} />
    </picture>
  )
};

export default Picture;
