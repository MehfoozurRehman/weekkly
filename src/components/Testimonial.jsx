import { testimonials } from "../assets/Index";
import { Swiper } from "swiper/react";
import { TestimonialEntry } from "./TestimonialEntry";

export function Testimonial({ }) {
  return (
    <div className="container__home__testimonials">
      <div className="container__home__testimonials__left">
        <img
          src={testimonials}
          alt="testimonials"
          className="container__home__testimonials__left__img" />
      </div>
      <div className="container__home__testimonials__right">
        <Swiper>
          <TestimonialEntry />
        </Swiper>
      </div>
    </div>
  );
}
