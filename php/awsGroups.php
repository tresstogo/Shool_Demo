<?php
 
 $HostName = "remotemysql.com";
 $DatabaseName = "rSKYBcj4Vs";
 $HostUser = "rSKYBcj4Vs";
 $HostPass = "LES3aRSbMy";
 
$message = '';
 
$conn = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
if ($conn->connect_error)
{

 die("Connection failed: " . $conn->connect_error);
} 
 
 $json = json_decode(file_get_contents('php://input'), true);


$sql = "SELECT * FROM students WHERE GroupSt='$json[Group]'  ";

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