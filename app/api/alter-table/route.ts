import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Step 1: Add the CreatedAt column with a default value
    await sql`ALTER TABLE Rsvp ADD COLUMN CreatedAt TIMESTAMP DEFAULT NOW();`;

    // Step 2: Update existing records with today's date
    await sql`UPDATE Rsvp SET CreatedAt = NOW() WHERE CreatedAt IS NULL;`;

    return NextResponse.json(
      { message: "Column CreatedAt added and existing records updated" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
