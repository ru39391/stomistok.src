import { FC } from 'react';

import HighlightItem from './highlights-item';
import type { IHighlightsWrapper } from '../model/types';

const HighlightsWrapper: FC<IHighlightsWrapper> = ({ title, subdepts }) => {
  return (
    <div className="container">
      <div className="col-lg-6 px-0">
        <a className="tabtitles__item" href="#">{title}</a>
        <div className="highlights__tab d-lg-flex flex-wrap">
          {subdepts.map(({ id, pagetitle, pics, uri }) => <HighlightItem key={id.toString()} name={pagetitle} img={pics[0]?.src} url={uri}  />)}
        </div>
      </div>
    </div>
  )
};

export default HighlightsWrapper;
