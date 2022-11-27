import React from 'react';
import { RiFocus2Line } from "react-icons/ri";
import { FcIdea } from "react-icons/fc";
import { FiPieChart } from "react-icons/fi";
import heroImg from '../../images/avater.png';
import lineOrg from '../../images/object-1.png'

const LandingPage = () => {
    return (
        <section className="bg-primary">
            <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <img className='w-20 mb-6' src={lineOrg} alt="" />
                    <h3 className='uppercase text-xl font-bold text-secondary'>we are the creative</h3>
                    <h1 className='uppercase text-5xl text-white'>Marketing <br /> agency</h1>
                    <p className='text-white w-1/2 my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum ducimus vel eveniet error voluptatum.?</p>
                    <button className='border-2 border-white text-white px-5 py-1 uppercase rounded-full'>see more</button>
                    <div className="flex justify-between items-center mt-6">
                        <div className='bg-white p-1 rounded-full mr-4'>
                            <RiFocus2Line className='text-4xl text-[#ff068e]' />
                        </div>
                        <div className='bg-white p-1 rounded-full mr-4'>
                            <FcIdea className='text-4xl text-[#eab04d]' />
                        </div>
                        <div className='bg-white p-1 rounded-full mr-4'>
                            <FiPieChart className='text-4xl text-secondary' />
                        </div>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={heroImg} />
                </div>
            </div>
        </section>
    );
};

export default LandingPage;