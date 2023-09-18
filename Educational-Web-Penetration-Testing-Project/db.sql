CREATE TABLE users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,  -- This will store the hashed password
    email VARCHAR(50),
    registration_date TIMESTAMP
);

INSERT INTO users (username, password, email, registration_date)
VALUES ('legit_user', 'hashed_password_for_legit_user', 'legit@example.com', NOW()),
       ('dummy_user', 'hashed_password_for_dummy_user', 'dummy@example.com', NOW());

CREATE TABLE comments (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id INT(6) UNSIGNED,
    content TEXT,
    comment_date TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Comment as a hint to vulnerability
INSERT INTO comments (user_id, content, comment_date)
VALUES ((SELECT id FROM users WHERE username = 'dummy_user'), 'Have you checked out /backup.sql?', NOW());

CREATE TABLE files (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id INT(6) UNSIGNED,
    file_name VARCHAR(255) NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    upload_date TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
