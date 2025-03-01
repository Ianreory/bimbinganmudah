import { NextApiRequest, NextApiResponse } from "next";
import { UserService } from "@/services/user/userService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, nama, password } = req.body;

    // Validasi input
    if (!email || !nama || !password) {
      return res.status(400).json({ error: "Data tidak lengkap" });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: "Password harus minimal 6 karakter" });
    }

    try {
      // Cek apakah email sudah digunakan
      const existingUser = await UserService.getUserByEmail(email);
      if (existingUser) {
        return res.status(409).json({ error: "Email sudah terdaftar" });
      }

      // Buat user baru
      const newUser = await UserService.registerUser(email, nama, password);
      return res.status(201).json(newUser);
    } catch (error) {
      console.error("Error saat membuat user:", error);
      return res.status(500).json({ error: "Gagal membuat user" });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
