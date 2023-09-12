<?php
$server = "localhost";
$username = "root";
$password = "";
$database = "vulnerable_db";

$conn = mysqli_connect($server, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
2. Registration (register.php):
php
Copy code
<?php
include 'config.php';

if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = $_POST['password']; // This should be hashed in a real system.

    $query = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
    mysqli_query($conn, $query);
    echo "Registered successfully!";
}
?>

<form method="post">
    Username: <input type="text" name="username"><br>
    Password: <input type="password" name="password"><br>
    <input type="submit" name="submit" value="Register">
</form>
3. Login (login.php):
php
Copy code
<?php
include 'config.php';

if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0) {
        echo "Login successful!";
    } else {
        echo "Login failed!";
    }
}
?>

<form method="post">
    Username: <input type="text" name="username"><br>
    Password: <input type="password" name="password"><br>
    <input type="submit" name="submit" value="Login">
</form>
4. Comments Section (comments.php):
php
Copy code
<?php
include 'config.php';

if (isset($_POST['submit'])) {
    $comment = $_POST['comment'];

    $query = "INSERT INTO comments (content) VALUES ('$comment')";
    mysqli_query($conn, $query);
    echo "Comment added!";
}

$result = mysqli_query($conn, "SELECT * FROM comments");
?>

<form method="post">
    Comment: <textarea name="comment"></textarea><br>
    <input type="submit" name="submit" value="Post Comment">
</form>

<h2>Comments:</h2>
<?php
while ($row = mysqli_fetch_assoc($result)) {
    echo $row['content'] . "<br>";
}
?>