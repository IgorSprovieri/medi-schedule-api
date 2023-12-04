-- AlterTable
ALTER TABLE "Clinic" ADD COLUMN     "speciality_id" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "Speciality" (
    "id" TEXT NOT NULL,
    "speciality" TEXT NOT NULL,

    CONSTRAINT "Speciality_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Clinic" ADD CONSTRAINT "Clinic_speciality_id_fkey" FOREIGN KEY ("speciality_id") REFERENCES "Speciality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
