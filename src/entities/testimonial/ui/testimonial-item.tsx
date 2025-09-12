import { FC } from 'react';

import { StarIcon } from '@shared/icons';
import type { ITestimonialItem } from '../types';

const TestimonialItem: FC<ITestimonialItem> = ({ name, intro, props, createdon, rating, children }) => {
  return (
    <div className="w-8/9">
      <div className="flex gap-x-2 mb-3">
        {rating.map(
          (value) => <div key={value} className={`max-w-[20px] flex-[0_0_20px] ${value ? 'text-yellow-200' : 'text-white'}`}><StarIcon /></div>
        )}
      </div>
      <div className="text-white mb-6">{children}</div>
      <div className="text-sm text-white font-semibold mb-1">{createdon}</div>
      <div className="text-white font-bold">{name} {intro}</div>
    </div>
  )
};

export default TestimonialItem;
