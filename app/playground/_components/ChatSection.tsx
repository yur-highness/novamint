"use client"
import { Messages } from '../[projectId]/page'
import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

type props = {
  messages: Messages[]
  onSend:any
}

const ChatSection = ({ messages , onSend }:props) => {
const [input, setInput] = useState<string>("");
 const handleSend = () => {
  
    if (!input?.trim()) return;
    
    onSend(input);
    setInput("");

  };

 

  return (
    <div  className='w-75 m-2 h-[90vh] p-4 border-2 border-gray-100 text-white flex flex-col'>
      <div className='flex-1 overflow-y-auto p-4  space-y-3 flex flex-col'>
        {messages?.length === 0 ? (
          <p>No messages</p>
        ) : (
          messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role=='user'?'justify-end':'justify-start'}`}>
              <div className={`p-2 rounded-lg max-w-[80%]${msg.role==='user'?' bg-blue-500 text-white':' bg-gray-600'}text-white`}>
                {msg.content}
              </div>
            </div>
          ))
        )}
      </div>
      <div className='pt-2 border-t flex items-center gap-2'>
       
         <textarea name="" id="" 
         onChange={(event)=>setInput(event.target.value)}
         className='flex-1 w-full resize-none border rounded-lg px-2 py-10 focus:ouline-none focus:ring-2'
         placeholder='Describe your website design idea'
         value={input}
         ></textarea>
          <Button className='mt-24 text-black cursor-pointer'
          variant={"outline"}
          onClick={handleSend}>
            <ArrowUp/>
          </Button>
      
      </div>
    </div>
  );
}
export default ChatSection
