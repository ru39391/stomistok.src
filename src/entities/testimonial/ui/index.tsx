import { FC } from 'react';

const TestimonialItem: FC = () => {
  return (
    <div className="owl-item">
      <div className="section__comment-top d-flex flex-wrap justify-content-between">
        <div className="section__comment-rating section__comment-rating_rating-5">
          <div className="section__comment-star section__comment-star_star-1"></div>
          <div className="section__comment-star section__comment-star_star-2"></div>
          <div className="section__comment-star section__comment-star_star-3"></div>
          <div className="section__comment-star section__comment-star_star-4"></div>
          <div className="section__comment-star section__comment-star_star-5"></div>
        </div>
        <div className="section__comment-date">09.06.2025 г.</div>
      </div>
      <div className="section__comment-title">Виталий Игоревич о <span className="font-weight-bold">Михалев Денис Владимирович</span></div>
      <div className="section__comment-text">
        <div className="section__comment-introtext">
          introtext...<br />
          <a className="section__comment-readmore" href="#">Читать далее</a>
        </div>
        <div className="section__comment-fulltext">
          fulltext<br />
          <a className="section__comment-readmore" href="#">Свернуть</a>
        </div>
      </div>
    </div>
  )
};

export default TestimonialItem;
