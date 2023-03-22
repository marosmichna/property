import React from 'react'

const ContactNowCard = ({open, close}) => {
    if(!open) return null
    const handleCancel = () => {
        close(false)
    }
  return (
    <div className="absolute left-0 right-0 top-0 bottom-0 m-auto w-[300px] h-[300px] bg-[#DADE13]">
        <h2 className="font-pap text-center p-[10px]">Contact us Now</h2>
        <form className="p-[10px] bg-[#DADE13]">
            <input 
                type="text"
                className=" w-full outline-none py-2  pl-2 "
                placeholder="Name"
            />
            <input
                type="email"
                className="  outline-none pl-2 w-full py-2"
                placeholder="Email" 
            />
            <textarea
                type="area"
                className="outline-none py-2 pl-2 w-full h-[230px]"
                placeholder="Message" 
            />
            <div className="flex flex-row justify-between">
                <input
                    className="cursor-pointer"
                    type="submit"
                />
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </form>
        
    </div>
  )
}

export default ContactNowCard