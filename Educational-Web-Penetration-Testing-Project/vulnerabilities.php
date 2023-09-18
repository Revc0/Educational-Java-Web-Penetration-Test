
//
<?php
// set a cookie if it doesn't exist
if (!isset($_COOKIE['content'])) {
    setcookie('content', 'Hello there!', time() + 3600);
}
// Display cookie content
echo $_COOKIE['content'];
?>
