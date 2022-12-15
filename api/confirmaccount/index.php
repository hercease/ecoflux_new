<?php
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include "../connection.php";
date_default_timezone_set("Africa/lagos");

if($_SERVER['REQUEST_METHOD'] == "POST"){

	$path = explode('/', $_SERVER['REQUEST_URI']);
	$email = $path['4'];
	$activated = "activated";
	
$stmt1 = $conn->prepare("SELECT email FROM members where email = ?");
$stmt1->bind_param("s", $email);
$stmt1->execute();
$result1 = $stmt1->get_result();
if($result1->num_rows > 0){
	$stmt = $conn->prepare("UPDATE members SET status = ? where email = ?");
	$stmt->bind_param("ss", $activated,$email);
	$stmt->execute();
	$stmt->close();
	
	$data[] = array(
						"status" => "1",
					);
}else{
	$data[] = array(
						"status" => "0",
					);
}
   
	
	$response = ['result' =>  $data];
	
	echo json_encode($response);
	
}
?>