import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {FaBars, FaTimes} from "react-icons/fa";
import ContactNowCard from './ContactNowCard';


const Navbar = () => {

    const[nav, setNav] = useState(false)
    const[openModal, setOpenModal] = useState(false)

    const handleNavClick = () => {
        setNav(!nav)
    }

    const handleOpenModal = () => {
        setOpenModal(!openModal)
    }

  return (

    /// Menu ///

    <div className="max-w-[1200px] pt-7 mx-auto flex flex-row items-center px-2 h-[80px]">
        <h3 className="font-pop leading-[45px] text-[30px] font-bold">
            <span className="text-[#DADE13]">M</span>y-home
        </h3>
        <ul className="font-pop ml-[230px]  items-center hidden md:flex">
            <li className="active mr-5 relative uppercase">
                <Link to="home" smooth={true} duration={500}>
                    HOME
                </Link>
            </li>
            <li className="mr-5 relative uppercase text-[#C9C9C9] hover:text-black">
                <Link to="product" smooth={true} duration={500}>
                    PRODUCTS
                </Link>
            </li>
            <li className="mr-5 relative uppercase text-[#C9C9C9] hover:text-black">
                <Link to="gallery" smooth={true} duration={500}>
                    GALLERY
                </Link>
            </li>
            <li className="mr-5 relative uppercase text-[#C9C9C9] hover:text-black">
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>
        <button onClick={handleOpenModal}  className="ml-auto border border-black px-4 py-2 hover:border-none hover:text-[#DADE13] hover:font-bold hidden md:flex">CONTACT US NOW</button>
        <ContactNowCard open={openModal} close={setOpenModal} />
    {/* Hamburger */}

        <div onClick={handleNavClick} className="md:hidden z-10 ml-auto">
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

    {/* Mobile menu */}

        <ul className={!nav ? "hidden" : "absolute top-0 lef-0 w-full h-screen bg-[#F8F2F2] flex flex-col justify-center items-center"}>
            <li className="py-6 text-4xl">
                <Link to="home" smooth={true} duration={500}>
                    HOME
                </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link to="product" smooth={true} duration={500}>
                    PRODUCTS
                </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link to="gallery" smooth={true} duration={500}>
                    GALLERY
                </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link to="contact" smooth={true} duration={500}>
                    CONTACT
                </Link>
            </li>
        </ul>

    </div>
  )
}

export default Navbar