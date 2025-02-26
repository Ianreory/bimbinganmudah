// (Business logic)

import { UserRepository } from "@/lib/repositories/userRepository";
import { Role } from "@prisma/client";

export const UserService = {
  async getUserProfile(id: number) {
    const user = await UserRepository.findUserById(id);
    if (!user) throw new Error("User not found");
    return user;
  },

  async login(email: string, password: string) {
    let user = await UserRepository.getUserByEmail(email);
    if (user) {
      return true;
    }
    return false;
  },

  async registerUser(email: string, nama: string, hashedPassword: string) {
    return UserRepository.createUser({
      email,
      nama,
      password: hashedPassword,
      role: Role.mahasiswa,
    });
  },

  async getUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  },
};
