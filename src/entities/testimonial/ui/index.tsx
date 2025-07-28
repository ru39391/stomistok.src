import { FC } from 'react';

import type { ITestimonialItem } from '../types';

const TestimonialItem: FC<ITestimonialItem> = ({ name, intro, props, createdon, rating, children }) => {
  return (
    <div className="owl-item">
      <div className="section__comment-top d-flex flex-wrap justify-content-between">
        <div className={`section__comment-rating section__comment-rating_rating-${props.rating}`}>
          {rating.map(value => <div key={value} className={`section__comment-star section__comment-star_star-${value}`}></div>)}
        </div>
        <div className="section__comment-date">{createdon}</div>
      </div>
      <div className="section__comment-title">{name} <span className="font-weight-bold">{intro}</span></div>
      {children}
    </div>
  )
};

export default TestimonialItem;
