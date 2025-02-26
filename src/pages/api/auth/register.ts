import { NextApiRequest, NextApiResponse } from "next";
import { UserService } from "@/services/user/userService";
import bcrypt from "bcryptjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method Not Allowed",
      status: 405,
    });
  }

  const { email, nama, password } = req.body;

  // Validasi input
  if (!email || !nama || !password) {
    return res.status(400).json({
      message: "Data tidak lengkap",
      status: 400,
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: "Password harus minimal 6 karakter",
      status: 400,
    });
  }

  try {
    // Cek apakah email sudah terdaftar
    const existingUser = await UserService.getUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({
        message: "Email sudah terdaftar",
        status: 409,
      });
    }

    // Hash password sebelum disimpan
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat user baru dengan password yang sudah di-hash
    await UserService.registerUser(email, nama, hashedPassword);

    return res.status(201).json({
      message: "Registrasi berhasil!",
      status: 201,
    });
  } catch (error) {
    console.error("Error saat membuat user:", error);
    return res.status(500).json({
      message: "Gagal membuat user",
      status: 500,
    });
  }
}
