/*
  Warnings:

  - You are about to drop the column `birth` on the `client` table. All the data in the column will be lost.
  - You are about to drop the `location` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `client` DROP COLUMN `birth`,
    ADD COLUMN `cpf` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `notes` TEXT NOT NULL;

-- DropTable
DROP TABLE `location`;
