import db from "@/config/db";
import { frameTables, projectTable, chatTables } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse,NextRequest } from "next/server";

export async function POST(req:NextRequest) {
    const { projectId,frameId,messages } = await req.json();
    const user = await currentUser();

    if (!user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try{
        //craete a new project in the database
        const  projectResult = await db.insert(projectTable).values({
            projectId:projectId,
            createdBy:user?.primaryEmailAddress?.emailAddress,
        })

        //create a new frame in the database
        const frameResult = await db.insert(frameTables).values({
            projectId:projectId,
            frameId:frameId,
        })

        //save chat messages to the database
        const  chatResults = await db.insert(chatTables).values({
                frameId:frameId,
                chatMessage:messages,
                createdBy:user?.primaryEmailAddress?.emailAddress,
         }     )
        
    }
    catch(error){
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
    

    return NextResponse.json({ projectId,frameId,messages});

}