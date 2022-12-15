<?php
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include "../connection.php";
include "../functions.php";
date_default_timezone_set("Africa/lagos");
if($_SERVER['REQUEST_METHOD'] == "POST"){
	
	$user = json_decode(file_get_contents('php://input'));
	$email = decryptCookie($user->email);
}
	
if($_SERVER['REQUEST_METHOD'] == "GET"){
	$path = explode('/', $_SERVER['REQUEST_URI']);
	$email = decryptCookie($path[4]);
}
	
	$data = array();
	
	$stmt = $conn->prepare("SELECT name,phone,status,date,address,profile FROM members WHERE email=?");
	$stmt->bind_param("s", $email);
	$stmt->execute();
	$stmt->store_result();
	$stmt->bind_result($name,$phone,$status,$date,$address,$profile);
	$stmt->fetch();
		$name;$phone;$status;$date;$address;$profile;
	$stmt->close();
	
	$productNum = $conn->query("SELECT COUNT(*) as totalcart FROM ordered_products where email = '$email' and payment_id=''");
	$resultproductNum = $productNum->fetch_assoc();
	$cartCount = $resultproductNum['totalcart'];
	
	 $data = array(
         "name" => $name,
         "phone" => $phone,
         "date" => date("F j, Y, g:i a", strtotime($date)),
         "email" => $email,
         "address" => $address,
         "profile" => $profile,
		 "total_cart_count" => $cartCount
      );
	  
	  
	$response = ['result' =>  $data];
	
	echo json_encode($response);
	

?>