import React from 'react'
import { Messages } from '../[projectId]/page'

type props = {
  messages: Messages[]
}

const ChatSection = ({ messages }:props) => {
  return (
    <div  className='w-75 m-2 h-[90vh] p-4 border-2 border-gray-100 text-white'>
      <div className='flex-1 overflow-y-auto p-4  space-y-3 flex flex-col'>
        {messages?.length === 0 ? (
          <p>No messages</p>
        ) : (
          messages.map((msg, i) => (
            <div></div>
          ))
        )}
      </div>
    </div>
  );
}
export default ChatSection
