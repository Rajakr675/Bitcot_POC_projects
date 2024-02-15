-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "f_name" TEXT NOT NULL,
    "l_name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
