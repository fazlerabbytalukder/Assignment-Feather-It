import React from 'react';
import { RiFocus2Line } from "react-icons/ri";
import { FcIdea } from "react-icons/fc";
import { FiPieChart } from "react-icons/fi";
import heroImg from '../../images/avater.png';
import lineOrg from '../../images/object-1.png';
import horizontalLine from '../../images/object-2.png';
import infinityImg from '../../images/object-4.png';
import taglineImg from '../../images/object-5.png';
import leftObject from '../../images/object-6.png';
import circleImg from '../../images/object-7.png';
import zikzackImg from '../../images/object-8.png';
import SocialSites from '../../components/SocialSites/SocialSites';


const LandingPage = () => {
    return (
        <section className="bg-primary relative">
            <div className="container mx-auto flex px-10 pt-8 md:flex-row flex-col items-center relative">
                {/* left half  */}
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <img className='w-20 mb-6' src={lineOrg} alt="" />
                    <h3 className='uppercase text-xl font-bold text-secondary'>we are the creative</h3>
                    <h1 className='uppercase text-5xl text-white'>Marketing <br /> agency</h1>
                    <p className='text-white lg:w-1/2 my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum ducimus vel eveniet error voluptatum.?</p>
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
                {/* right half  */}
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={heroImg} />
                </div>
                {/* social icon part  */}
                <div className='absolute bottom-10 right-0'>
                    <SocialSites/>
                </div>
                {/* horaizontal line  */}
                <div className='absolute bottom-10 left-0'>
                    <img className='w-2' src={horizontalLine} alt="" />
                </div>
                {/* infinity object  */}
                <div className='absolute bottom-0 left-1/4 invisible lg:visible xl:visible'>
                    <img className='w-3/12' src={infinityImg} alt="" />
                </div>
                {/* tagline text  */}
                <div className='absolute top-11 left-1/3 invisible lg:visible xl:visible'>
                    <div className='relative'>
                        <img className='w-3/12' src={taglineImg} alt="" />
                        <h3 className='absolute inset-16 text-2xl text-white italic tracking-widest'>Supercharge <br /> Your Business <br /> With Us!</h3>
                    </div>
                </div>
            </div>
            {/* circle object  */}
            <div className='absolute top-1/3 left-0'>
                <img className='w-14' src={leftObject} alt="" />
            </div>
            {/* circle object 2 */}
            <div className='absolute top-1/2 right-1/2 invisible lg:visible xl:visible'>
                <img className='w-16' src={circleImg} alt="" />
            </div>
            {/* right corner object  */}
            <div className='absolute top-0 right-0'>
                <img className='w-16' src={zikzackImg} alt="" />
            </div>
        </section>
    );
};

export default LandingPage;