import { FC } from 'react';

import type { IHighlightItem } from '../model/types';

const HighlightItem: FC<IHighlightItem> = ({ name, img, url }) => {
  const isVisible = false;

  return (
    <a className="highlights__item row" href={url}>
        {isVisible && <span className="col-lg-12 col-sm-3 d-inline-block align-middle">
          <span className="highlights__item-icon"><img className="img-fluid" src={img} alt={name} /></span>
        </span>}
        <span className="highlights__item-title col-lg-12 col-sm-9">{name}</span><br />
    </a>
  )
};

export default HighlightItem;
