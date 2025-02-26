// (Business logic)

import { UserRepository } from "@/lib/repositories/userRepository";
import { Role } from "@prisma/client";

export const UserService = {
  async getUserProfile(id: number) {
    const user = await UserRepository.findUserById(id);
    if (!user) throw new Error("User not found");
    return user;
  },

  async registerUser(email: string, nama: string, password: string) {
    return UserRepository.createUser({ 
      email, 
      nama, 
      password, 
      role: Role.admin
    });
  },

  async getUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  },
};
