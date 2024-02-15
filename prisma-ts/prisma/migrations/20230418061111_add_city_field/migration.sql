-- CreateEnum
CREATE TYPE "City" AS ENUM ('indore', 'bhopal', 'ujjain', 'dewas');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "city" "City" NOT NULL DEFAULT 'indore';
