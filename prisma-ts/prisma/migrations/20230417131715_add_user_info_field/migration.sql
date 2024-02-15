-- CreateTable
CREATE TABLE "UserInfo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "bank_name" TEXT NOT NULL,
    "Account_open" BOOLEAN NOT NULL,
    "Active_acc" BOOLEAN NOT NULL DEFAULT false,
    "Account_id" INTEGER NOT NULL,

    CONSTRAINT "UserInfo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserInfo" ADD CONSTRAINT "UserInfo_Account_id_fkey" FOREIGN KEY ("Account_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
