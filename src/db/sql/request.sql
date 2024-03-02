-- Create requests table & create the 
CREATE TABLE IF NOT EXISTS `roomie_seekr`.`request` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `creator_id` INT NOT NULL COMMENT 'Foreign key pointing to the user.id',
  `location` VARCHAR(45) NULL,
  `address` VARCHAR(200) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `area` VARCHAR(45) NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `budget_min` INT NULL,
  `budget_max` INT NULL,
  `two_wheeler_parking` INT NULL DEFAULT 0,
  `four_wheeler_parking` INT NULL DEFAULT 0,
  `furnishing_status` VARCHAR(45) NULL,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (creator_id) REFERENCES user(id)
  ON UPDATE CASCADE ON DELETE RESTRICT
  )
  
-- Seeder data
INSERT INTO `request` (`creator_id`, `location`, `address`, `city`, `state`, `area`, `description`, `budget_min`, `budget_max`, `two_wheeler_parking`, `four_wheeler_parking`, `furnishing_status`)
VALUES
(1, 'North', '123 Main St', 'Metropolis', 'MP', 'Urban', 'Looking for a spacious apartment', 10000, 15000, 1, 0, 'Fully Furnished'),
(2, 'South', '456 Elm St', 'Village', 'VI', 'Rural', 'Need a cozy cottage', 8000, 12000, 0, 1, 'Semi-Furnished'),
(3, 'East', '789 Oak St', 'Town', 'TO', 'Suburban', 'Searching for a modern condo', 12000, 18000, 1, 1, 'Unfurnished');

