<?php
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include "../connection.php";
include('../functions.php');
date_default_timezone_set("Africa/lagos");
$response = array();
					
	$que="SELECT prod_id from products";
	
	$res = mysqli_query($conn,$que) or  die('error: ' . mysqli_connect_error());
	
	while($row =  mysqli_fetch_array($res)){
		
		$id = $row['prod_id'];
		
		$response[] = array(
			"id" => $id,
		);
    }
	
	$response = ['result' =>  $response];
	echo json_encode($response);
	exit;
	
?>