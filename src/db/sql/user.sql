-- To Create the user table
CREATE TABLE IF NOT EXISTS `roomie_seekr`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `mobile` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `deleted` BINARY(0) NOT NULL,
  `created_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `mobile_UNIQUE` (`mobile` ASC) VISIBLE)


  -- Seeder data
INSERT INTO `user` (`username`, `email`, `password`, `first_name`, `last_name`, `mobile`, `deleted`, `city`)
VALUES
('john_doe', 'john.doe@example.com', 'password123', 'John', 'Doe', '1234567890', 0, 'chennai'),
('jane_smith', 'jane.smith@example.com', 'password456', 'Jane', 'Smith', '0987654321', 0, 'bangalore'),
('alice_wonderland', 'alice.wonderland@example.com', 'password789', 'Alice', 'Wonderland', '5555555555', 0, 'mumbai');
