
import { NextResponse, NextRequest } from "next/server";
import  db  from "@/config/db";
import { chatTables } from "@/config/schema";
import { eq } from "drizzle-orm";


export async function PUT(req: NextRequest) {
    const { frameId, messages } = await req.json();
    const response = await db.update(chatTables).set({ chatMessage: messages }).where(eq(chatTables.frameId, frameId));

    return  NextResponse.json({response:'updated successfully'});
}