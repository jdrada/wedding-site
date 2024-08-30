import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  const howMany = searchParams.get("howMany");
  const song = searchParams.get("song");
  const driver = "none";

  try {
    if (!name || !howMany) throw new Error("name and howMany required");

    // Inserting the record, CreatedAt will be automatically set by the database
    await sql`INSERT INTO Rsvp (Name, HowMany, Song, Driver) VALUES (${name}, ${howMany}, ${
      song || "no song"
    }, ${driver});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ confirmed: true }, { status: 200 });
}
