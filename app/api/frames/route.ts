import { NextRequest, NextResponse } from "next/server";
import db from "@/config/db";
import { frameTables, chatTables } from "@/config/schema";
import { eq } from "drizzle-orm";



export async function GET(req:NextRequest) {

    const {searchParams} = new URL(req.url);
    const frameId = searchParams.get('frameId');
    const projectId = searchParams.get('projectId');

    if (!frameId) {
        return new NextResponse('Missing frameId', { status: 400 });
    }

    const frameResult = await db.select().from(frameTables).where(eq(frameTables.frameId, frameId));

    const chatResults = await db.select().from(chatTables).where(eq(chatTables.frameId, frameId));


    const finalResult = {
        ...frameResult[0],
        chatResults:chatResults[0].chatMessage
    };
    
    
    return NextResponse.json(finalResult);

}