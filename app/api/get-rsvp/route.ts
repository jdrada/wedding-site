import { db, sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const client = await db.connect();
  try {
    await client.sql`SELECT * FROM rsvp;`;

    const { rows } = await client.query(
      "SELECT name, howmany, song, createdat FROM rsvp;"
    );
    // const { rows } =
    //   await sql`SELECT name, howmany, song, createdat FROM rsvp;`;
    // console.log("rows", rows.length);

    // const { rows } = await sql`SELECT * FROM rsvp;`;

    if (!rows || rows.length === 0) throw new Error("No data found");

    // const filteredTests = rows.filter(
    //   (rows) => rows.name.toLowerCase() !== "test"
    // );

    return NextResponse.json({ data: rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
