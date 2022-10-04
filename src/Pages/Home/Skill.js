import React from 'react';
import html from '../../images/skill/html.svg';
import css from '../../images/skill/css.svg';
import tailwind from '../../images/skill/tailwind.svg';
import bootstrap from '../../images/skill/bootstrap.svg';
import javascript from '../../images/skill/javascript.svg';
import react from '../../images/skill/react.svg';
import mongoDB from '../../images/skill/mongoDb.png';
import firebase from '../../images/skill/firebase.svg';
import typescript from '../../images/skill/typescript.svg';
import nextJS from '../../images/skill/nextJS.svg';
import expressJs from '../../images/skill/expressJs.svg';
import nodeJs from '../../images/skill/nodeJs.svg';
import figma from '../../images/skill/figma.svg';
import canva from '../../images/skill/canva.svg';

const Skill = () => {

    const skills = [
        { name: "HTML", img: html, id: 1 },
        { name: "CSS", img: css, id: 2 },
        { name: "React", img: react, id: 3 },
        { name: "Tailwind", img: tailwind, id: 4 },
        { name: "Bootstrap", img: bootstrap, id: 5 },
        { name: "Javascript", img: javascript, id: 6 },
        { name: "MongoDB", img: mongoDB, id: 7 },
        { name: "firebase", img: firebase, id: 8 },
        { name: "Typescript", img: typescript, id: 9 },
        { name: "Next", img: nextJS, id: 10 },
        { name: "Express", img: expressJs, id: 11 },
        { name: "Node", img: nodeJs, id: 12 },
        { name: "figma", img: figma, id: 13 },
        { name: "canva", img: canva, id: 14 }
    ]
    return (
        <div className='mt-24'>
            <h2 className='text-4xl text-[#8cc090] font-bold mt-3 text-center font lg:mb-24'>My Skill</h2>


            <div className='my-4 grid grid-cols-2 md:grid-cols-3 md:gap-3 gap-2 lg:grid-cols-4 lg:gap-4 text-[#808da4] text-center justify-items-center'>
                {
                    skills.map(skill => <div
                        key={skill.id}
                        className='border text-lg font-semibold border-[#8cc090] px-8 py-5 w-32 hover:bg-[#8cc090] hover:text-white flex flex-col justify-center items-center'>
                        <img src={skill.img} alt="canva" />
                        <h2>{skill.name}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Skill;