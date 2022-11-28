import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const Workshop = () => {
    return (
        <div>
            <Navbar />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                        <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Feather IT ​ started its journey in Oct. 2016, stated in Dhaka, Bangladesh. By the demand of this Digital Era, Feather IT is providing various ICT Services now in Bangladesh. Where we already have some abroad clients, we are also trying to work with some SAAS systems.</h1>
                        <Link to='/contact' className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Workshop;