"use client";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { UserDetailsContext } from "@/context/UserDetailsContext";
import {  Progress } from "@/components/ui/progress";
import { UserButton } from "@clerk/nextjs";

export function AppSidebar() {
    const [projectList,setProjectList] = useState([
       ]);
    const [userDetail, setUserDetails] = useContext(UserDetailsContext);
  return (
    <Sidebar>

        <SidebarHeader>
            <Link href={"/"}>
            <div className="flex gap-2 items-center justify-center cursor-pointer">
            
                <Image src={"/logo.svg"} alt="Logo" width={32} height={32} />
           
                <h2 className="font-bold text-xl">Novamint</h2>
        
            </div>
          </Link>
            <Link href={"/workspace"} className="mt-5 w-full" >
            <Button className="w-full cursor-pointer bg-linear-to-r from-slate-900 to-slate-700">+ Add New Project</Button>
            </Link>
        </SidebarHeader>
      <SidebarContent className="p-2 mt-4">
        <SidebarGroup >
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            {projectList.length==0 && (<p className="text-sm text-gray-500 px-2">
                No projects yet.
                </p>
            )}
            {projectList.map((project) => (
                <SidebarGroup>
                 
                    <SidebarGroupLabel >{projectList}</SidebarGroupLabel>
                    
                     </SidebarGroup>
            ))}
            <SidebarGroup>
                <SidebarGroupLabel>Recent</SidebarGroupLabel>
            </SidebarGroup>
                       </SidebarGroup>
        <SidebarGroup >
            </SidebarGroup>
      </SidebarContent>
      <SidebarFooter >
<div className="flex w-full flex-col mb-4 space-y-3 items-center justify-center bg-zinc-900 text-white p-4 rounded-lg">
    <h2
    className="text-sm">Remaining Credits <span>{userDetail?.credits}</span></h2>
    <Progress value={33} max={100} className="w-full ml-2 h-5 rounded-lg bg-gray-200">
       
    </Progress>
    <Button className="mt-4 w-full bg-linear-to-r from-slate-900 to-slate-700 cursor-pointer"> Upgrade to Pro</Button>
</div>
<div className="flex items-center justify-center">
  
                       <UserButton
                         appearance={{
                           elements: {
                             avatarBox: "w-10 h-10",
                             userButtonPopoverCard: "shadow-xl",
                             userPreviewMainIdentifier: "font-semibold",
                           },
                         }}
                         afterSignOutUrl="/"
                       />
                    
                     <Button
                       variant={"ghost"}
                     >
                       Settings
                     </Button>
                     </div>
        </SidebarFooter>
       
    </Sidebar>
  )
}

