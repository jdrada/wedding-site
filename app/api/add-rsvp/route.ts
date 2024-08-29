import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  const howMany = searchParams.get("howMany");
  const song = searchParams.get("song");

  try {
    if (!name || !howMany) throw new Error("name and howMany required");
    await sql`INSERT INTO Rsvp (Name, HowMany, Song) VALUES (${name}, ${howMany}, ${
      song || ""
    });`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  // const pets = await sql`SELECT * FROM Pets;`;
  return NextResponse.json({ confirmed: true }, { status: 200 });
}
