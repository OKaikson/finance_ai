"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const DeleteTransaction = async (id: string) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Não autorizado");
  }

  await db.transaction.delete({
    where: {
        id
    }
  })

  revalidatePath("/transactions");
};
