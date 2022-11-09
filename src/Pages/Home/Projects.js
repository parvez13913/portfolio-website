import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);
    return (
        <div className='my-16 font container'>
            <h1 className='text-center text-4xl my-8 text-[#8cc090] font-bold'> MY RECENT BEST WORKS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    />)
                }
            </div>
        </div>
    );
};

export default Projects;