import { sql } from "@/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const result = await sql.query(`SELECT * FROM users;`);
  const users = result.rows;
  return Response.json({ success: true, users });
}
