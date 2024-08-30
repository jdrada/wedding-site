import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { rows } =
      await sql`SELECT Name, HowMany, Song, Driver, CreatedAt FROM Rsvp;`;

    if (!rows || rows.length === 0) throw new Error("No data found");

    const filteredTests = rows.filter(
      (row) => row.name.toLowerCase() !== "test"
    );

    return NextResponse.json({ data: filteredTests }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
