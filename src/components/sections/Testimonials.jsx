import { useRef } from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Section from './../Section';
import Article from './../Article';
import Slider from "react-slick";

const testimonials = [
{
id: 1,
name: "Ahmed Mostafa",
role: "Manager, PMIS",
content: "I was looking for a solution of how to manage the departments I supervise, and for the solution to be flexible, expandable, and add features according to demand. This is exactly what Gharib provided, He is well aware of how to deal with customers and he has a good understanding of the business requirements. Thank you very much!!!",
rating: 5,
img: "testimonials/ahmed-mostafa.png",
},
{
id: 2,
name: "Mohamed Gamal",
role: "Manager, ISFP(Adabia Port Project)",
content: "As a project manager it is important to be fully aware of the developments at the department level, the challenges, documenting procedures and response time. This is what the system enables by having a good understanding of the business requirements. Excellent work!",
rating: 5,
img: "testimonials/mohamed-gamal.png",
},
{ 
id: 3,
name: "Ahmed El-Saied",
role: "Responsible for IT, IT-Department ",
content: "We really appreciate the effort and dedication him put into our project. The results speak for themselves!. The system is easy to use and has a lot of features that make our work easier. I highly recommend him for any project. Thank you very much.",
rating: 4,
img: "testimonials/ahmed-elsaied.png",
},
{ 
id: 4,
name: "Omar Abdo",
role: "Technical Lead, ISFP(Adabia Port Project)",
content: "The work is now more organized and we have a reference for the faults that we solve. What I like most is the ease of use of the system. Thank you very much.",
rating: 4,
img: "testimonials/omar.png",
},

];

export default function Testimonials() {

    let sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        swipeToSlide: true,
        arrows: false,
        dotListClass: 'text-white',
    };

    return (
        <Section id={'testimonials'} className={'custom-bg'} >
            <Article title={"What People Say"} style={'text-white'}>
                <div className='slider-container' >
                    <Slider ref={sliderRef} {...settings} className='p-2 '>
                        {testimonials.map((testimonial) => (
                            <div 
                                key={testimonial.id} 
                                className=" w-full snap-start flex-shrink-0  border border-white border-opacity-40 shadow-xl  backdrop-blur-sm space-x-4 p-4"
                                data-aos="zoom-in"
                            >
                                <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-8 ">
                                    <div className='min-w-[80px] min-h-[80px] flex justify-center items-center'>
                                        <img 
                                            loading='lazy'
                                            src={`/${testimonial.img}`} 
                                            alt={testimonial.name} 
                                            className="w-20 h-20 rounded-full mb-4" 
                                        />
                                    </div>
                                    <div>
                                        <FaQuoteLeft className="text-white text-2xl opacity-70 mb-4" />
                                        <p className="text-white text-opacity-90 mb-6">
                                            {testimonial.content}
                                        </p>
                                        <div className="flex items-center mb-2">
                                            {Array.from({ length: testimonial?.rating || 0 }).map((_,i) => (
                                                <FaStar 
                                                    key={i} 
                                                    className={`text-${i < testimonial.rating ? 'yellow-400' : 'gray-300'} text-sm`} 
                                                />
                                            ))}
                                        </div>
                                        <h3 className="text-white font-bold">{testimonial.name}</h3>
                                        <p className="text-white text-opacity-70 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Article>
        </Section>
    );
}