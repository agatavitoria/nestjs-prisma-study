import { Prisma } from "@prisma/client";

export interface UpdateUser {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }