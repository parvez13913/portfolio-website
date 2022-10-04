import React from 'react';

const Education = () => {

    const educations = [
        {
            id: 0,
            degreeName: "Complete Web Development Course With Jhankar Mahbub",
            PassingYear: "2022-2022",
        },
        {
            id: 1,
            degreeName: "Bachelor Of Science  Department of Chemistry",
            PassingYear: "2021-2025",
        },
        {
            id: 2,
            degreeName: "Higher Secondary Certificate At Mia Jinnah Alam College",
            PassingYear: "2017-2019",
            gpa: "4.67/5.00"
        },
        {
            id: 3,
            degreeName: "Secondary School Certificate At Garaganj Secondary School",
            PassingYear: "2015-2017",
            gpa: "4.73/5.00"
        },
        {
            id: 3,
            degreeName: "Junior School Certificate At Garaganj Secondary School",
            PassingYear: "2014",
            gpa: "4.44/5.00"
        },
    ]
    return (
        <div className='mt-24 font'>
            <h2 className='text-center text-4xl'>
                <span className='text-white'>My</span>
                <span className='text-[#8cc090]'> Education</span>
            </h2>
            <div className='mt-12 text-white grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center ml-6 lg:ml-0'>
                {
                    educations.map(education => <div
                        key={education.id}
                        className="lg:w-[60%] pl-4 my-3 border-l"
                    >
                        <div className='w-10 h-10 p-1 -mt-10 -ml-9 pl-2 pt-2 rounded-full bg-[#8cc090]'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                            </svg>
                        </div>
                        <div className='mb-4 -mt-6 pl-3'>
                            <span className='w-24 px-4 py-2 rounded-full border border-[#8cc090] hover:bg-[#8cc090]'>{education.PassingYear}</span>
                        </div>
                        <div className='pl-3 mb-8 mt-6'>
                            <p className='text-xl'>{education.degreeName}</p>
                            <p className='text-xl'>GPA : {education?.gpa || 'Nan'}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Education;