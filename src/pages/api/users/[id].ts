import { NextApiRequest, NextApiResponse } from "next";
import { UserService } from "@/services/user/userService";
import apiLogger from "../middleware"; // Sesuaikan path jika perlu

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  apiLogger(req, res, async () => {
    const { id } = req.query; // Ambil parameter dari URL

    if (req.method === "GET") {
      if (!id) return res.status(400).json({ error: "ID user diperlukan" });

      try {
        const user = await UserService.getUserProfile(Number(id));
        return res.status(200).json(user);
      } catch (error) {
        return res.status(404).json({ error: "User tidak ditemukan baru" });
      }
    }

    return res.status(405).json({ error: "Method Not Allowed" });
  });
}
