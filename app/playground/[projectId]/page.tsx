"use client";

import ChatSection from "../_components/ChatSection";
import PlayGroundHeader from "../_components/PlayGroundHeader";
import WebsiteDesignSection from "../_components/WebsiteDesignSection";
import SettingsSection from "../_components/SettingsSection";
import { useParams, useSearchParams } from "next/navigation";
import Axios from "axios";
import { useEffect, useState } from "react";

export type Frame = {
  frameId: string;
  projectId: string;
  designCode: string;
  chatMessages: [
    {
      role: string;
      content: string;
    }
  ];
};

export type Messages = {
  role: string;
  content: string;
};



const prompt = `
userInput: {userInput}

Instructions:

1. If the user input is explicitly asking to generate code, design, or HTML/CSS/JS output (e.g., "Create a landing page", "Build a dashboard", "Generate HTML Tailwind CSS code"), then:

   - Generate a complete HTML Tailwind CSS code using Flowbite UI components.  
   - Use a modern design with **blue as the primary color theme**.  
   - Only include the <body> content (do not add <head> or <title>).  
   - Make it fully responsive for all screen sizes.  
   - All primary components must match the theme color.  
   - Add proper padding and margin for each element.  
   - Components should be independent; do not connect them.  
   - Use placeholders for all images:  
       - Light mode: https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg
       - Dark mode: https://www.cibaky.com/wp-content/uploads/2015/12/placeholder-3.jpg
       - Add alt tag describing the image prompt.  
   - Use the following libraries/components where appropriate:  
       - FontAwesome icons (fa fa-)  
       - Flowbite UI components: buttons, modals, forms, tables, tabs, alerts, cards, dialogs, dropdowns, accordions, etc.  
       - Chart.js for charts & graphs  
       - Swiper.js for sliders/carousels  
       - Tippy.js for tooltips & popovers  
   - Include interactive components like modals, dropdowns, and accordions.  
   - Ensure proper spacing, alignment, hierarchy, and theme consistency.  
   - Ensure charts are visually appealing and match the theme color.  
   - Header menu options should be spread out and not connected.  
   - Do not include broken links.  
   - Do not add any extra text before or after the HTML code.  

2. If the user input is **general text or greetings** (e.g., "Hi", "Hello", "How are you?") **or does not explicitly ask to generate code**, then:

   - Respond with a simple, friendly text message instead of generating any code.  

Example:

- User: "Hi" → Response: "Hello! How can I help you today?"  
- User: "Build a responsive landing page with Tailwind CSS" → Response: [Generate full HTML code as per instructions above]
`


const playground = () => {
  const { projectId } = useParams();

  const params = useSearchParams();

  const frameId = params.get("frameid");

  const [framedetail, setFramedetail] = useState<Frame | null>(null);

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Messages[]>([]);

  const [generateCode, setGenerateCode] = useState<string>("");

  useEffect(() => {
    frameId&&GetFramedetails();
  }, [frameId]);

const GetFramedetails = async () => {
const result  = await Axios.get(`/api/frames?frameId=${frameId}&projectId=${projectId}`)
.then((res) => res.data).catch((err) => console.log(err));
;
setFramedetail(result);

};

  const sendMessage = async (userInput: string) => {
    setLoading(true);
    setMessages((prevMessages: any) => [
      ...prevMessages,
      { role: "user", content: userInput },
    ]);
    const result = await fetch("/api/ai-model", {
      method: "POST",
      body: JSON.stringify({
        messages: [{ role: "user", content: prompt?.replace("{userInput}", userInput) }],
      }),
    });

    const reader = result.body?.getReader();

    const decoder = new TextDecoder();
    let airesponse = "";
    let isCode = false;
    let codeChunk = "";
    let restChunk = "";

    while (true) {
      // @ts-ignore
      const { done, value } = await reader?.read();
      if (done) break;
  
  
    const chunk = decoder.decode(value, { stream: true });
    airesponse += chunk;

  //check if AI response is code
  if (!isCode && airesponse.includes("```html")) {
    isCode = true;
    const index = airesponse.indexOf("```html") + 7;
    codeChunk = airesponse.slice(0, index);
    restChunk = airesponse.slice(index);
    setGenerateCode((prevMessages:any) => prevMessages + codeChunk);
    airesponse = restChunk;
  } else if (isCode) {
    setGenerateCode((prevMessages:any) => prevMessages + chunk);
  }
}


    //after streaming  end

    if (!isCode) {
      setMessages((prevMessages: any) => [
        ...prevMessages,
        { role: "assistant", content: airesponse },
      ]);
    } else {
      setMessages((prevMessages: any) => [
        ...prevMessages,
        { role: "assistant", content: "your code is ready to use" },
      ]);
    }
    setLoading(false);
  };

  useEffect(()=>{
    console.log(generateCode)
  },[generateCode])

  return (
    <div className="bg-zinc-950 min-h-screen gap-6 p-1">
      <PlayGroundHeader />
      <div className="flex p-2">
        <ChatSection
          onSend={(input: string) => {
            sendMessage(input);
          }}
          messages={messages ?? []}
        />
        <WebsiteDesignSection />
        <SettingsSection />
      </div>
    </div>
  );
};

export default playground;
