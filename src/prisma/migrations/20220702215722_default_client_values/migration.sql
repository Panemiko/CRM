-- AlterTable
ALTER TABLE `client` MODIFY `address` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `gender` ENUM('Masculino', 'Feminino') NOT NULL DEFAULT 'Masculino',
    MODIFY `maritalState` ENUM('Solteiro', 'Casado', 'Separado', 'Divorciado', 'Viuvo') NOT NULL DEFAULT 'Solteiro',
    MODIFY `name` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `notes` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `occupation` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `phone` VARCHAR(191) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `location` MODIFY `nome` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `uf` ENUM('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF') NOT NULL DEFAULT 'RS';
