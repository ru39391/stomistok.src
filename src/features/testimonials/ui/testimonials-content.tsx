import { FC, useState } from 'react';

import type { ITestimonialsContent } from '../types';

const TestimonialsContent: FC<ITestimonialsContent> = ({ content, desc, isExpanderVisible }) => {
  const [isContentVisible, setContentVisible] = useState<boolean>(false);

  return (
    <div className="section__comment-text">
      <div className={`section__comment-${isContentVisible ? 'fulltext' : 'introtext'}`}>
        {isContentVisible ? content : desc}<br />
        {isExpanderVisible &&
          <button
            className="section__comment-readmore"
            type="button"
            onClick={() => setContentVisible(!isContentVisible)}
          >
            {isContentVisible ? 'Свернуть' : 'Читать далее'}
          </button>
        }
      </div>
    </div>
  )
};

export default TestimonialsContent;
