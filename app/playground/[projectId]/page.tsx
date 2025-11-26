"use client";

import ChatSection from "../_components/ChatSection";
import PlayGroundHeader from "../_components/PlayGroundHeader";
import WebsiteDesignSection from "../_components/WebsiteDesignSection";
import SettingsSection from "../_components/SettingsSection";
import { useParams, useSearchParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { toast } from "sonner";


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
  const loadedOnce = useRef(false);

  useEffect(() => {
    frameId && GetFramedetails();
  }, [frameId]);



const GetFramedetails = async () => {
  try {
    const res = await axios.get('/api/frames', {
      params: { frameId, projectId },
    });

    const result = res.data;
    setFramedetail(result);

    let designCode = result?.designCode || ""; // SAFE fallback

    // Prevent crashes if code block not found
    let formatedCode = "";

    if (typeof designCode === "string" && designCode.includes("```html")) {
      const index = designCode.indexOf("```html") + 8;
      formatedCode = designCode.slice(index);
    } else {
      // No code yet → leave blank instead of crashing
      formatedCode = designCode;
    }

    setGenerateCode(formatedCode);

    // Load previous messages safely
    if (Array.isArray(result?.chatResults)) {
      setMessages(result.chatResults);
    }

    // Auto-trigger AI only once
    if (!loadedOnce.current && result?.chatResults?.length === 1) {
      loadedOnce.current = true;
      const userMsg = result.chatResults[0].content;
      sendMessage(userMsg);
    }

  } catch (error) {
    console.error("❌ Error fetching frame details:", error);
  }
};



  const sendMessage = async (userInput: string,) => {

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

    while (true) {
      // @ts-ignore
      const { done, value } = await reader?.read();
      if (done) break;
  
  
    const chunk = decoder.decode(value, { stream: true });
    airesponse += chunk;

  //check if AI response is code
  if (!isCode && airesponse.includes("```html")) {
    isCode = true;
    const index = airesponse.indexOf("```html") + 8;
    const restChunk = airesponse.slice(index);
    setGenerateCode((prevMessages:any) => prevMessages + restChunk);
    airesponse = restChunk;
  } else if (isCode) {
    setGenerateCode((prevMessages:any) => prevMessages + chunk);
  }
}
  await saveGenratedCode(airesponse);

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




  const SaveMessages = async ()=>{
      const result = await axios.put("/api/chats", {
        messages: messages,
        frameId: frameId
      }).then((response) => {
        return response.data
      }).catch((error) => {
        console.log(error);
      });
  }


 useEffect(() => {
  if (messages.length > 0 && messages[messages.length - 1].role === "assistant") {
    SaveMessages();
  }
  // if(generateCode.length > 10 && !loading){
  //   saveGenratedCode()
  // }

  console.log(generateCode);
}, [messages]);

const saveGenratedCode=async (code:string)=>{
  const result = await axios.put("/api/frames", {
  designCode: code,
  frameId: frameId,
  projectId: projectId
  }).then((response) => {
    return console.log(response.data)
  }).catch((error) => {
    console.log(error);
  });

  // toast.success("Website is ready");

}



  return (
    <div className="bg-zinc-950 min-h-screen gap-6 p-1">
      <PlayGroundHeader />
      <div className="flex p-2">
        <ChatSection
          onSend={(input: string) => {
            sendMessage(input);
          }}
          messages={messages ?? []}
          loading={loading}
         
        />
        <WebsiteDesignSection generatedCode={generateCode?.replace("```", "")}/>
        <SettingsSection />
      </div>
    </div>
  );
};

export default playground;
