import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

    <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
      <div className='flex flex-col justify-around'>
        <div className='sm:px-16 px-2'>
          <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
          <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm T Sai Kiran, a 2023 graduate from IIT Kanpur🎓 with a passion for crafting robust backend systems and captivating mobile applications.As a seasoned <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/t-sai-kiran-213052209/' target='_blank'>Software developer</a> I specialize in implementing advanced machine learning models, and leveraging cloud technologies to create innovative solutions that address complex challenges and drive meaningful impact.🚀. 
          <br/>
          </p>

          <ButtonLink
            url='https://drive.google.com/file/d/1BDH_DpKALgVW_ueIsBz-InIIBE6RwL03/view?usp=sharing'
            text='View Resume →'
            padding={`p-3`}
          />

        </div>
        <div className='mt-20 flex justify-center flex-wrap gap-7'>
          {services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About;