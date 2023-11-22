/*
  Warnings:

  - You are about to drop the column `email` on the `Clinic` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Clinic` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Clinic` table. All the data in the column will be lost.
  - Added the required column `clinic_adress` to the `Clinic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clinic_name` to the `Clinic` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Clinic_email_key";

-- AlterTable
ALTER TABLE "Clinic" DROP COLUMN "email",
DROP COLUMN "password",
DROP COLUMN "role",
ADD COLUMN     "clinic_adress" TEXT NOT NULL,
ADD COLUMN     "clinic_name" TEXT NOT NULL;
