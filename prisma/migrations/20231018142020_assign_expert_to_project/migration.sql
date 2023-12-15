-- CreateTable
CREATE TABLE `ExpertsInProjects` (
    `expertId` VARCHAR(191) NOT NULL,
    `projectId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ExpertsInProjects_expertId_key`(`expertId`),
    UNIQUE INDEX `ExpertsInProjects_projectId_key`(`projectId`),
    PRIMARY KEY (`expertId`, `projectId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
