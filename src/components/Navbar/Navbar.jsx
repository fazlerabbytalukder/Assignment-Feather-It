import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import SearchInput from '../SearchInput/SearchInput';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import logo from '../../images/logo.png';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className='py-2'>
            <div className="flex items-center justify-between container mx-auto px-10 flex-wrap w-full">
                <Link className='cursor-pointer' to='/'>
                    <img className='w-32 mr-2' src={logo} alt="" />
                </Link>
                <FiMenu className='lg:hidden block h-6 w-6 cursor-pointer' onClick={() => setOpen(!open)} />
                <nav className={`${open ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}>
                    <ul className='text-base text-primary lg:flex lg:justify-between'>
                        {/* all links here  */}
                        <li>
                            <Link className='lg:px-5 py-2 font-semibold block' to='/'><button>Home</button></Link>
                        </li>
                        <li>
                            <Link className='lg:px-5 py-2 font-semibold block' to='/about'><button>About</button></Link>
                        </li>
                        <li>
                            <Link className='lg:px-5 py-2 font-semibold block' to='/workshop'><button>Workshop</button></Link>
                        </li>
                        <li>
                            <Link className='lg:px-5 py-2 font-semibold block' to='/contact'><button>Contact</button></Link>
                        </li>
                        <li>
                            <SearchInput />
                        </li>
                        <li className='flex justify-center items-center'>
                            <div className='relative inline-block text-left'>
                                <div>
                                    <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                                        <BsThreeDotsVertical className='text-2xl' />
                                    </button>
                                </div>
                                {
                                    dropdownOpen && (
                                        <DropdownMenu/>
                                    )
                                }
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;