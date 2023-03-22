import React from 'react';
import ContactCard from './ContactCard';
import FinancierPhoto from "../../images/DarthVader.jpg";
import InsurerPhoto from "../../images/DarthMaul.jpg";
import ConsultantPhoto from "../../images/DarthSidious.png";
import {AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillTwitterSquare} from "react-icons/ai"

const Contact = () => {
  return (
    <div name="contact" className="max-w-[1200px] h-full mx-auto px-2 sm:h-full">
        <div className=" flex flex-col gap-5 sm:flex-row justify-between mt-12">
            <ContactCard
                contactName = "Financier"
                contactImg = {FinancierPhoto}
                contactUserPhone = "555666"
            />
            <ContactCard
                contactName = "Insurer"
                contactImg = {InsurerPhoto}
                contactUserPhone = "666777"
            />
            <ContactCard
                contactName = "Consultant"
                contactImg = {ConsultantPhoto}
                contactUserPhone = "777888"
            />
        </div>
        <div>
            <svg 
                className="mt-16 hidden sm:flex"
                width="1184" height="5" viewBox="0 0 1184 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="2.5" x2="1184" y2="2.5" stroke="white" stroke-width="5"/>
            </svg>
        </div>
        <div className="sm:flex sm:flex-row grid grid-cols-3 sm:justify-between text-center mt-4">
            <a href='/'>Cookies</a>
            <a href='/'>Advertising</a>
            <a href='/'>Career</a>
            <a href='/'>Products</a>
            <a href='/'>Comments</a>
            <a href='/'>GDPR</a>
            <a href='/'>Complaints</a>
        </div>
        <div className="flex flex-row justify-center mt-14">
            <AiFillFacebook size={42} className="mr-5 cursor-pointer"/>
            <AiFillInstagram size={42} className="mr-5 cursor-pointer"/>
            <AiFillYoutube size={42} className="mr-5 cursor-pointer"/>
            <AiFillTwitterSquare size={42} className="mr-5 cursor-pointer"/>
        </div>
        <div className="text-center mb-2 mt-14">
            <p>© Anakin s.r.o Copyrights are reserved and exercised by the operator of the portal.</p>
        </div>
    </div>
  )
}

export default Contact