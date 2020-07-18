<?php
include "php-test.php";
echo "Hello Again from PHP";

// Creating connection.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
$consulta = "SELECT * FROM domestic ";

$result = mysqli_query($con, $consulta);

$fila = mysqli_fetch_row($result);

echo $fila[1];

// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');
$obj = json_decode($json,true);

echo $obj;

?>