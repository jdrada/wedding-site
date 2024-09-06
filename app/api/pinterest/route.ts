import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const result = await fetch("https://api.pinterest.com/v5/mendozac3096", {
    method: "GET",
    headers: {
      Authorization: "Bearer <access_token>",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  console.log(await result.json());

  return NextResponse.json({ status: 200 });
}
