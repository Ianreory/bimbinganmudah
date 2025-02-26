import { NextApiRequest, NextApiResponse } from "next";
import { authenticateToken } from "@/utils/authMiddleware";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  authenticateToken(req, res, () => {
    return res.status(200).json({ user: (req as any).user });
  });
}
