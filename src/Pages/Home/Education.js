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
            <div className='mt-12 text-white grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center'>
                {
                    educations.map(education => <div
                        key={education.id}
                        className="lg:w-[60%] pl-4 lg:pl-0 my-3"
                    >

                        <div className='mb-8'>
                            <span className='w-24 px-4 py-2 rounded-full border border-[#8cc090] hover:bg-[#8cc090]'>{education.PassingYear}</span>
                        </div>
                        <div>
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