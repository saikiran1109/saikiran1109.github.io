
import React from "react";
import vpn from '../assets/vpn.png'
import copeople from '../assets/copeople.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Snap Shot' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={vpn} alt="" />
            </a>}
            {title=='Co People' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={copeople} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Waste Segregation using Computer Vision',
        description:'To sort and segregate different types of waste so that the segregated waste can be recycled or decomposed',
        image: {vpn},
        git:'https://github.com/saikiran1109?tab=repositories',
        technologies:['Python' ,'gradio' , 'Streamlit']
    },
    {
        title:'Fog Forecasting over Airport',
        description:'Predicted the fog occurrence over IGI airport based on the data from 1945 at 30 min resolution',
        image: {vpn},
        git:'https://github.com/saikiran1109?tab=repositories',
        technologies:['python']
    },
    {
        title:'Facial Expression Recognition using ML ',
        description:'Created a model that recognize the facial expression from the input and outputs the emotion',
        image: {copeople},
        git:'https://github.com/saikiran1109?tab=repositories',
        technologies:[ 'Python', 'CNN']
    },
    {
        title:'Flappy bird AI using NEAT Algorithm ',
        description:'Created a game to pass the bird through hurdles and to evolve through generations, and bird that travels maximum distance to be declared fittest.',
        image: {copeople},
        git:'https://github.com/saikiran1109?tab=repositories',
        technologies:[ 'python','Pygame', 'GUI']
    },
    {
        title:'Clinical Text Classification using NLP',
        description:'Performed SMOTE analysis, Data Preprocessing and used scispaCy for processing biomedical, scientific or clinical text.',
        image: {copeople},
        git:'https://github.com/saikiran1109?tab=repositories',
        technologies:[ 'python', 'ScispaCy', 'LogisticRegression']
    }
]

export default Projects