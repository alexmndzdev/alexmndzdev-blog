import * as React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';

const Testimonials = ({ testimonials }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla theme-dark">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {testimonials.map((testimonial) => (
            <div key={v4()} className="embla__slide">
              <div className="card slide">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <div className="image">
                        <img
                          src="https://bulma.io/assets/images/placeholders/96x96.png"
                          alt="Placeholder image"
                        />
                      </div>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{testimonial.author}</p>
                      <p className="subtitle is-6">{testimonial.email}</p>
                    </div>
                  </div>

                  <div className="content">
                    {testimonial.quote}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
      email: PropTypes.string,
    })
  ),
};

export default Testimonials;
