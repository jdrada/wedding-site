import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // const { rows } =
    //   await sql`SELECT Name, HowMany, Song, CreatedAt FROM Rsvp;`;

    const { rows } = await sql`SELECT* FROM rsvp;`;
    console.log("all", rows);

    if (!rows || rows.length === 0) throw new Error("No data found");

    const filteredTests = rows.filter(
      (rows) => rows.name.toLowerCase() !== "test"
    );

    return NextResponse.json({ data: filteredTests }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
