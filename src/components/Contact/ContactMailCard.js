import React from 'react'

function ContactMailCard() {
  return (
    <form className="absolute top-0 left-0 w-full bg-[#DADE13]">
      <input 
        type="text"
        className=" w-full outline-none py-2 bg-[#DADE13] pl-2"
        placeholder="Name"
      />
      <input
        type="email"
        className=" bg-[#DADE13] outline-none pl-2 w-full py-2"
        placeholder="Email" 
      />
      <textarea
        type="area"
        className=" bg-[#DADE13] outline-none py-2 pl-2 w-full h-[230px]"
        placeholder="Message" 
      />
      <input
        className="bg-[#C9C9C9] px-2 py-1 w-full border-none p-0 m-0"
        type="submit"
      />
    </form>
  )
}

export default ContactMailCard
