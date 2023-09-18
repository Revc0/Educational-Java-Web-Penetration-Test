-- Table structure for `users`
CREATE TABLE users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,  -- This stores passwords in plain text (bad practice!)
    email VARCHAR(50),
    registration_date TIMESTAMP
);

-- Dumping data for table `users`
INSERT INTO users (username, password, email, registration_date)
VALUES ('legit_user', 'legitPassword123', 'legit@example.com', '2023-09-09 10:10:10'),
       ('dummy_user', 'dummyPassword456', 'dummy@example.com', '2023-09-09 11:11:11');

-- Table structure for `comments`
CREATE TABLE comments (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id INT(6) UNSIGNED,
    content TEXT,
    comment_date TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Dumping data for table `comments`
-- This comment is a hint about the backup.sql vulnerability.
INSERT INTO comments (user_id, content, comment_date)
VALUES (2, 'Have you checked out /backup.sql?', '2023-09-09 12:12:12');

-- Table structure for `files`
CREATE TABLE files (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id INT(6) UNSIGNED,
    file_name VARCHAR(255) NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    upload_date TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);