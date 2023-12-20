import React from 'react'
import { RiChat1Line } from "react-icons/ri";

const Chat = () => {
    return (
        <div className='fixed bottom-10 z-40'>
            <div className='min-w-[320px] bg-white h-[75vh] rounded py-5 border border-red'>
                <div className=''>
                    <div className="chat chat-start ">
                        <div className="chat-bubble">It's over Anakin, <br />I have the high ground.</div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble">You underestimate my power!</div>
                    </div>
                </div>
                <div className='p-2'>
                    <textarea className='w-full p-1' name="xabar" id="xabar" cols="30" rows="1">
                        hi
                    </textarea>
                </div>
            </div>
            <RiChat1Line className='w-[50px] h-auto color-[#004269]' />
        </div>
    )
}

export default Chat;