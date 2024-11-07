/*
  Warnings:

  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "image",
ADD COLUMN     "check_1" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "check_2" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "phone" TEXT;
