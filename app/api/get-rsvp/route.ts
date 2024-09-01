import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { rows } =
      await sql`SELECT Name, HowMany, Song, CreatedAt FROM Rsvp;`;

    const { rows: all } =
      await sql`SELECT Name, HowMany, Song, CreatedAt FROM rsvp;`;
    console.log("all", all);

    if (!rows || rows.length === 0) throw new Error("No data found");

    const filteredTests = rows.filter(
      (row) => row.name.toLowerCase() !== "test"
    );

    return NextResponse.json({ data: filteredTests }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
