// (Repository untuk akses database)


import { prisma } from "../prisma";

// Pastikan Role di-import dari Prisma
import { Role } from "@prisma/client";

export const UserRepository = {
  async findUserById(id: number) {
    return prisma.user.findUnique({ where: { id } });
  },

  async createUser(data: { email: string; nama: string; password: string; role: Role }) {
    return prisma.user.create({ data });
  },
};
