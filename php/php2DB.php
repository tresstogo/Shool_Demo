<?php
$HostName = "remotemysql.com";
 
//Define your database name here.
$DatabaseName = "rSKYBcj4Vs";
 
//Define your database username here.
$HostUser = "rSKYBcj4Vs";
 
//Define your database password here.
$HostPass = "LES3aRSbMy";

// Creating connection.
$conn = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
echo "HERE";