<?php
// ================================
// DATABASE CONNECTION
// ================================

$server = "localhost";
$username = "root";
$password = "";
$database = "vulnerable_db";

$conn = mysqli_connect($server, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// ================================
// VULNERABLE SESSION MANAGEMENT
// ================================

session_start();
$_SESSION['user'] = 'John';

// SECURE ALTERNATIVES:
// session_name("customSessionName");
// ini_set('session.cookie_httponly', 1);
// ini_set('session.cookie_secure', 1);
// session_start();
// $_SESSION['user'] = 'John';

// ================================
// VULNERABLE COOKIE MANAGEMENT
// ================================

setcookie("session", "some_session_value", time() + 3600, "/");

// SECURE ALTERNATIVES:
// HttpOnly Flag:
// setcookie("session", "some_session_value", time() + 3600, "/", "yourdomain.com", false, true);
// Secure Flag (use only with HTTPS):
// setcookie("session", "some_session_value", time() + 3600, "/", "yourdomain.com", true, false);
// Both HttpOnly and Secure Flag:
// setcookie("session", "some_session_value", time() + 3600, "/", "yourdomain.com", true, true);

// Always validate and sanitize data from cookies and sessions before using them.
?>


