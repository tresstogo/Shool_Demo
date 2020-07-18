<?php
 
include 'DBconfig.php';
 
$message = '';
 
$conn = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
if ($conn->connect_error)
{

 die("Connection failed: " . $conn->connect_error);
} 
 
$obj = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $json = json_decode($obj,true);


$sql = "SELECT * FROM students WHERE GroupS='$json[Group]'  ";


$result = $conn->query($sql);
 
if ($result->num_rows >0) {
 
 while($row[] = $result->fetch_assoc()) {
 
 $item = $row;
 
 $json = json_encode($item);
 }
 
} else {
 echo "NoGroup.";
}
 echo $json;
$conn->close();