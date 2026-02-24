import { miniappConfig } from "../../../../miniapp.config";

export async function GET() {
  return Response.json(miniappConfig);
}
