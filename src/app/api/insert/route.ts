import { sql } from "@/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  const paddedNumber = randomNumber.toString().padStart(3, "0");
  await sql.query(
    `INSERT INTO users (name) VALUES ('John Doe num ${paddedNumber}');`
  );

  return Response.json({ succes: true });
}
