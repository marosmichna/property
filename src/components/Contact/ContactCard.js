import React, { useState } from 'react'
import ContactMailCard from './ContactMailCard'

const style = {
    btn: `bg-[#DADE13] px-16 py-2 rounded hover:bg-[#C4C711] hover:text-white`
}

const ContactCard = ({contactName, contactImg, contactUserPhone}) => {

    const[contactMail, setContactMail] = useState(false)
    const[contactPhone, setContactPhone] = useState(true)

    const handleMailHandler = () => {
        setContactMail(!contactMail)
    }

    const handlePhoneHandler = () => {
        setContactPhone(!contactPhone)
    }

  return (
    <div className="bg-white flex flex-col items-center font-pop drop-shadow-2xl hover:scale-105 duration-500">
        <h1 className="font-pap mt-6 mb-5 sm:text-[25px] sm:leading-[35px]">{contactName}</h1>
        <img 
            src={contactImg} 
            alt="Contact Foto"
            className="w-[200px] h-[200px] mx-12 rounded mb-5"
        />
        <p className="text-[#C9C9C9] font-pop sm:text-[25px] sm:leading-[38px] mb-5">Ask Anything</p>
        <div className="flex flex-col gap-5 mb-5">
            <button 
                className={style.btn}
                onClick={handleMailHandler}
            >
                Mail
            </button>
            <button
                className={style.btn}
                onClick={handlePhoneHandler} 
            > 
                {contactPhone ? "Phone" : contactUserPhone}
            </button>
        </div>
        <p className="mb-5">or</p>
        <h2 className="mb-6 font-pap sm:text-[25px] sm:leading-[35px]">Personal meeting</h2>
        {contactMail ? <ContactMailCard /> : ""}
    </div>
  )
}

export default ContactCard