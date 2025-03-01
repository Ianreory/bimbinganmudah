import { NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { AuthenticatedRequest } from "@/pages/types/next";


export function authMiddleware(handler: Function) {
  return async (req: AuthenticatedRequest, res: NextApiResponse) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Token tidak ditemukan", status: 401 });
    }

    const token = authHeader.split(" ")[1];

    try {
      // Verifikasi token
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: number; email: string; role?: string };

      // Simpan data user di req agar bisa digunakan di handler berikutnya
      req.user = decoded;

      return handler(req, res);
    } catch (error) {
      return res.status(403).json({ message: "Token tidak valid", status: 403 });
    }
  };
}
