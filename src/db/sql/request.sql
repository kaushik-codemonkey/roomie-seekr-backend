-- Create requests table & create the 
CREATE TABLE IF NOT EXISTS `roomie_seeker`.`request` (
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
  


