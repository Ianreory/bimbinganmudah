import { NextApiRequest, NextApiResponse } from "next";
import { UserService } from "@/services/user/userService";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import * as cookie from "cookie";
import { serialize } from "cookie";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method Not Allowed",
      status: 405,
      token: null,
    });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email dan password diperlukan",
      status: 400,
      token: null,
    });
  }

  try {
    const user = await UserService.getUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        message: "Email atau password salah",
        status: 401,
        token: null,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) {
      console.log("Password salah");
      return res.status(401).json({
        message: "Email atau password salah",
        status: 401,
        token: null,
      });
    }

    // Buat access token (berlaku 15 menit)
    const accessToken = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: "15m" });

    // Buat refresh token (berlaku 7 hari)
    const refreshToken = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_REFRESH_SECRET as string, { expiresIn: "7d" });

    // Simpan refresh token di cookie (httpOnly)
    res.setHeader(
      "Set-Cookie",
      serialize("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
      })
    );

    return res.status(200).json({
      message: "Login berhasil",
      status: 200,
      token: accessToken,
    });
  } catch (error: any) {
    console.error("Error saat login:", error);

    return res.status(500).json({
      message: "Terjadi kesalahan pada server",
      status: 500,
      error: error.message, // Tambahkan pesan error asli
      stack: error.stack, // Tambahkan stack trace (untuk debugging)
      token: null,
    });
  }
}
