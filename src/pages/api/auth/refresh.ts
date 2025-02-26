import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import cookie from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const cookies = req.headers.cookie;
  if (!cookies) {
    return res.status(401).json({ error: "Refresh token tidak ditemukan" });
  }

  const parsedCookies = cookie.parse(cookies);
  const refreshToken = parsedCookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ error: "Refresh token tidak ditemukan" });
  }

  try {
    // Verifikasi refresh token
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET as string) as any;

    // Buat access token baru
    const newAccessToken = jwt.sign(
      { id: decoded.id, email: decoded.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "15m" }
    );

    return res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    return res.status(403).json({ error: "Refresh token tidak valid" });
  }
}
