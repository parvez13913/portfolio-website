import React from 'react';
import html from '../../images/skill/html.svg';
import css from '../../images/skill/css.svg';
import tailwind from '../../images/skill/tailwind.svg';
import bootstrap from '../../images/skill/bootstrap.svg';
import javascript from '../../images/skill/javascript.svg';
import react from '../../images/skill/react.svg';
import redux from '../../images/skill/redux-logo.svg';
import nextAuth from '../../images/skill/next-auth.png';
import mongoDB from '../../images/skill/mongoDb.png';
import firebase from '../../images/skill/firebase.svg';
import typescript from '../../images/skill/typescript.svg';
import nextJS from '../../images/skill/nextJS.svg';
import expressJs from '../../images/skill/expressJs.svg';
import mongoose from '../../images/skill/mongoose.png';
import nodeJs from '../../images/skill/nodeJs.svg';
import figma from '../../images/skill/figma.svg';
import canva from '../../images/skill/canva.svg';

const Skill = () => {

    const skills = [
        { name: "HTML", img: html, id: 153637383930 },
        { name: "CSS", img: css, id: 20987656544332 },
        { name: "Bootstrap", img: bootstrap, id: 5234567890 },
        { name: "Tailwind", img: tailwind, id: 4123456768 },
        { name: "Javascript", img: javascript, id: 623456798 },
        { name: "Typescript", img: typescript, id: 933445566778989 },
        { name: "React", img: react, id: 30987654 },
        { name: "Next", img: nextJS, id: 1033456778 },
        { name: "Next Auth", img: nextAuth, id: 103345677877665 },
        { name: "Redux", img: redux, id: 1033456778345 },
        { name: "firebase", img: firebase, id: 83345567 },
        { name: "Node", img: nodeJs, id: 1222334333 },
        { name: "Express", img: expressJs, id: 114567788 },
        { name: "MongoDB", img: mongoDB, id: 7223445778990 },
        { name: "Mongoose", img: mongoose, id: 34457789334290 },
        { name: "figma", img: figma, id: 134444444444 },
        { name: "canva", img: canva, id: 14775858585 }
    ]
    return (
        <div className='mt-24 container'>
            <h2 className='text-4xl text-[#8cc090] font-bold mt-3 text-center font lg:mb-10'>Technical Skills</h2>


            <div className='my-4 grid grid-cols-2 md:grid-cols-3 md:gap-3 gap-2 lg:grid-cols-7 lg:gap-4 text-[#808da4] text-center'>
                {
                    skills.map(skill => <div
                        key={skill.id}
                        className='text-lg font-semibold bg-[#23344c] p-4 hover:text-white flex flex-col justify-center items-center rounded-xl shadow-lg'>
                        <img className='w-20 h-20 scrvice-card' src={skill.img} alt="canva" />
                        <h2>{skill.name}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Skill;