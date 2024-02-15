-- DropForeignKey
ALTER TABLE "UserInfo" DROP CONSTRAINT "UserInfo_Account_id_fkey";

-- AddForeignKey
ALTER TABLE "UserInfo" ADD CONSTRAINT "UserInfo_Account_id_fkey" FOREIGN KEY ("Account_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
