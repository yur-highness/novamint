import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import db from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  const user = await currentUser();

  try {
    const email = user?.primaryEmailAddress?.emailAddress;
    
    if (!email) {
      return NextResponse.json(
        { error: "No email on current user" },
        { status: 400 }
      );
    }

    const userResult = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    //if user does not exist, create a new user
    if (userResult.length === 0) {
      const data = {
        email: user?.primaryEmailAddress?.emailAddress ?? "",
        name: user?.fullName ?? "NA",
        credits: 2,
      };
      const result = await db.insert(usersTable).values({
        ...data,
      });
      return NextResponse.json({ user: data });
    }
      return NextResponse.json({ user: userResult[0] });
  } 
  catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
