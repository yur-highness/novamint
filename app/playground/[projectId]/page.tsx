"use client";

import ChatSection from "../_components/ChatSection";
import PlayGroundHeader from "../_components/PlayGroundHeader";
import WebsiteDesignSection from "../_components/WebsiteDesignSection";
import SettingsSection from "../_components/SettingsSection";
import { useParams, useSearchParams } from "next/navigation";
import Axios from "axios";
import { useEffect, useState } from "react";


export type Frame = {
  frameId: string,
  projectId: string,
  designCode: string,
  chatMessages : [
    {
      role: string,
      content: string
    }
  ]
}

export type Messages = {
  role: string,
  content: string
}


const playground = () => {
  const {projectId} =  useParams();
  // console.log(projectId);
  const params  = useSearchParams();

  const frameId = params.get('frameId');

  const [framedetail, setFramedetail] = useState<Frame | null>(null);

  useEffect(() => {
    GetFramedetails();
  }, [frameId]);

  const  GetFramedetails = async () => {
    const result  = await Axios.post('/api/frames?frameId'+frameId+'&projectId='+projectId);
    console.log(result.data);
    setFramedetail(result.data);
  }
 
  return (
    <div className="bg-zinc-950 min-h-screen gap-6 p-1">
        <PlayGroundHeader />
        <div className="flex p-2">
        <ChatSection messages={framedetail?.chatMessages ?? []}/>
        <WebsiteDesignSection />
        <SettingsSection />
        </div>
    </div>
  )
}

export default playground;