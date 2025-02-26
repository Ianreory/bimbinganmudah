import { NextApiRequest, NextApiResponse } from "next";

// Middleware untuk logging request API
export default function apiLogger(req: NextApiRequest, res: NextApiResponse, next: Function) {
  console.log(`[API LOG] ${req.method} ${req.url}`);
  next(); // Lanjut ke handler API berikutnya
}
