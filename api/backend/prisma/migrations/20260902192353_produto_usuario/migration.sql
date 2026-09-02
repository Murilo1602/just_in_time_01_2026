-- AlterTable
ALTER TABLE `produto` ADD COLUMN `idUsuario` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_idUsuario_fkey` FOREIGN KEY (`idUsuario`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
