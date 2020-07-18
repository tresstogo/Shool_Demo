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

if ($json['Table'] == "students" ) {

    $query = "INSERT INTO `students` (`Name`, `GroupSt`, `OVR`, `IMG`) VALUES ('$json[Name]', '$json[Group]', '$json[OVR]', '$json[IMG]');";
}

if ($json['Table'] == "teachers" ) {
    $query = "INSERT INTO teachers(`Name`, `Subject`, `Experience`, `IMG`) VALUES('$json[Name]', '$json[Subject]', '$json[Experience]', '$json[IMG]')";
}
 
$query_result = $conn->query($query);
 
if ($query_result === true)
{
 $message = 'Success!';
}
 
else
{
 $message = 'Error! Try Again.';
}
 
echo json_encode($message);
 
$conn->close();
