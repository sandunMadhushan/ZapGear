<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "ecommerce";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = $conn->real_escape_string($_POST['firstName']);
    $last_name = $conn->real_escape_string($_POST['lastName']);
    $email = $conn->real_escape_string($_POST['email']);
    $subject = $conn->real_escape_string($_POST['subject']);
    $message = $conn->real_escape_string($_POST['message']);

    $sql = "INSERT INTO contacts (first_name, last_name, email, subject, message) 
            VALUES ('$first_name', '$last_name', '$email', '$subject', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Data inserted successfully!";
    } else {
        echo "Error: " . $conn->error;
    }
}

$conn->close();
