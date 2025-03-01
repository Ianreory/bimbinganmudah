import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import * as cookie from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed", status: 405 });
  }

  // Ambil refresh token dari cookie
  const cookies = cookie.parse(req.headers.cookie || "");
  const refreshToken = cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token tidak ditemukan", status: 401 });
  }

  try {
    // Verifikasi refresh token
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET as string) as { id: string; email: string };

    // Buat access token baru (berlaku 15 menit)
    const newAccessToken = jwt.sign({ id: decoded.id, email: decoded.email }, process.env.JWT_SECRET as string, { expiresIn: "1m" });

    return res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    return res.status(403).json({ message: "Refresh token tidak valid", status: 403 });
  }
}
