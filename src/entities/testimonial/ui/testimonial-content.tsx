import { FC, useState } from 'react';

import type { ITestimonialContent } from '../types';

const TestimonialsContent: FC<ITestimonialContent> = ({ content, desc, isExpanderVisible }) => {
  const [isContentVisible, setContentVisible] = useState<boolean>(false);

  return (
    <>
      <div className="text-lg text-lg/8 font-medium mb-1">{isContentVisible ? content : desc}</div>
      {isExpanderVisible &&
        <button
          className="pb-1 text-xs border-b-1 border-dashed cursor-pointer"
          type="button"
          onClick={() => setContentVisible(!isContentVisible)}
        >
          {isContentVisible ? 'Свернуть' : 'Читать далее'}
        </button>
      }
    </>
  )
};

export default TestimonialsContent;
