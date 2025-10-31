import { NextResponse } from "next/server";

export async  function POST(req:NextResponse) {
    const { projectId,frameId,messages } = await req.json();
    

    return NextResponse.json({ });

}