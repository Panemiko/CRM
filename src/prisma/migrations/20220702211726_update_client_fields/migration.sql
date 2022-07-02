/*
  Warnings:

  - Added the required column `address` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maritalState` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `occupation` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `client` ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `birth` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `gender` ENUM('Masculino', 'Feminino') NOT NULL,
    ADD COLUMN `maritalState` ENUM('Solteiro', 'Casado', 'Separado', 'Divorciado', 'Viuvo') NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `notes` VARCHAR(191) NOT NULL,
    ADD COLUMN `occupation` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL;
