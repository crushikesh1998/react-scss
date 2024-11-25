import React from 'react'
import './Testimonials.scss';
import Wrapper from '../wrapper/Wrapper';
import Bg1 from '../../assets/bg-price-2.svg'; 
import Bg2 from '../../assets/bg-footer.svg';
import Img1 from '../../assets/testimonial-1.png';
import Img2 from '../../assets/testimonial-2.png';
import Img3 from '../../assets/testimonial-3.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from "react-responsive-carousel"
const Testimonials = () => {
  return (
    <section className='testimonials'>
      <Wrapper>
        <div className="testimonials__text">
            <h2>We help Our Users</h2>
            <p>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit.
                eligendi amet quaeveniam in 
                itaque neque facere!
            </p>
        </div>
        <div className="testimonials__carousel">
            <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
            >
                <article className="testimonials__card">
                <blockquote
                className='testimonials__quote'
                >
                "
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Ea, eum incidunt et modi accusamus alias?
                "
                </blockquote>
                <div>
                    <img src={Img1} alt="" />
                    <p>Full Name</p>
                    <span>position @IBM</span>
                </div>
                </article>
               
                <article className="testimonials__card">
                <blockquote
                className='testimonials__quote'
                >
                "
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Ea, eum incidunt et modi accusamus alias?
                "
                </blockquote>
                <div>
                    <img src={Img2} alt="" />
                    <p>Full Name</p>
                    <span>position @IBM</span>
                </div>
                </article>
               
                <article className="testimonials__card">
                <blockquote
                className='testimonials__quote'
                >
                "
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Ea, eum incidunt et modi accusamus alias?
                "
                </blockquote>
                <div>
                    <img src={Img3} alt="" />
                    <p>Full Name</p>
                    <span>position @IBM</span>
                </div>
                </article>
            </Carousel>
        </div>
      </Wrapper>

      <img src={Bg1} alt="" className='testimonials__bg-1'/>
      <img src={Bg2} alt="" className='testimonials__bg-2'/>
    </section>
  )
}

export default Testimonials
