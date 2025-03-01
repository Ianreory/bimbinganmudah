import { NextApiResponse } from "next";
import { AuthenticatedRequest } from "@/pages/types/next";
import { UserService } from "@/services/user/userService";
import { authMiddleware } from "@/pages/middleware/auth";

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "GET") {
    if (!id) return res.status(400).json({ error: "ID user diperlukan" });

    try {
      const user = await UserService.getUserProfile(Number(id));
      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).json({ error: "User tidak ditemukan" });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}

export default authMiddleware(handler);
