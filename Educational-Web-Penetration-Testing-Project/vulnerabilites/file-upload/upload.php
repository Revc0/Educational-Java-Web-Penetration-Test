<?php
if (isset($_POST['submit'])) {
    $fileName = $_FILES['file']['name'];
    $fileTmpName = $_FILES['file']['tmp_name'];

    move_uploaded_file($fileTmpName, "uploads/" . $fileName);
    echo "File uploaded!";
}
?>

<form method="post" enctype="multipart/form-data">
    <input type="file" name="file">
    <input type="submit" name="submit" value="Upload">
</form>
