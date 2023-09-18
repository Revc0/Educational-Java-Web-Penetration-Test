<?php
include 'config.php';

if (isset($_POST['submit'])) {
    $comment = $_POST['comment'];

    // Vulnerable SQL Query
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
