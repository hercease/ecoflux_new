<?php
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include "../connection.php";
date_default_timezone_set("Africa/lagos");

if($_SERVER['REQUEST_METHOD'] == "POST"){

	$user = json_decode(file_get_contents('php://input'));
	$qty = $user->quantity;
	$id = $user->id;
	
    $stmt = $conn->prepare("UPDATE ordered_products SET quantity = ? where id = ?");
	$stmt->bind_param("ss", $qty,$id);
	$stmt->execute();
	$stmt->close();	
	  
	$response = ['message' =>  "1"];
	
	echo json_encode($response);
	
}
?>