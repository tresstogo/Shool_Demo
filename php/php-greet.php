<?php
include "DBonfig.php";

// Creating connection.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
$consulta = "SELECT * FROM students ";

$result = mysqli_query($con, $consulta);

$fila = mysqli_fetch_row($result);

echo $fila[1];

// Getting the received JSON into $json variable.

?>