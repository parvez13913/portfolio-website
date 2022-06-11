import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import html from '../../images/skill/html.svg';
import css from '../../images/skill/css.svg';
import tailwind from '../../images/skill/tailwind.svg';
import bootstrap from '../../images/skill/bootstrap.svg';
import javascript from '../../images/skill/javascript.svg';
import react from '../../images/skill/react.svg';
import mongoDB from '../../images/skill/mongoDB.svg';
import firebase from '../../images/skill/firebase.svg';
import typescript from '../../images/skill/typescript.svg';
import nextJS from '../../images/skill/nextJS.svg';
import expressJs from '../../images/skill/expressJs.svg';
import nodeJs from '../../images/skill/nodeJs.svg';
import figma from '../../images/skill/figma.svg';
import canva from '../../images/skill/canva.svg';

const Skill = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className='container mx-auto text-4xl'>
            <h2 className="text-center my-3">My Skill</h2>
            <div className='my-4'>
                <Slider {...settings}>
                    <div>
                        <img className='lg:w-[50px] w-[30px]' src={html} alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[50px] w-[30px]' src={css} alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[50px] w-[30px]' src={bootstrap} alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[50px] w-[30px]' src={tailwind} alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[50px] w-[30px]' src={javascript} alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[50px] w-[30px]' src={react} alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[50px] w-[30px]' src={firebase} alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[50px] w-[30px]' src={nodeJs} alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[50px] w-[30px]' src={expressJs} alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[30px] w-[30px]' src={mongoDB} alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[50px] w-[30px]' src={typescript} alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[50px] w-[30px]' src={nextJS} alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[50px] w-[30px]' src={html} alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[50px] w-[30px]' src={figma} alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[50px] w-[30px]' src={canva} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Skill;