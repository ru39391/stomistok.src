import { FC } from 'react';

import { Image } from '@shared/ui';
import type { IPlainData } from '@shared/types';

const HighlightsItem: FC<IPlainData> = ({ name, img, url }) => {
  const isVisible = false;

  return (
    <a className="highlights__item row" href={url}>
        {isVisible && <span className="col-lg-12 col-sm-3 d-inline-block align-middle">
          <span className="highlights__item-icon"><Image src={img} alt={name} /></span>
        </span>}
        <span className="highlights__item-title col-lg-12 col-sm-9">{name}</span><br />
    </a>
  )
};

export default HighlightsItem;
