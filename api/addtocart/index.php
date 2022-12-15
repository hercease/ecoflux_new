<?php
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include "../connection.php";
include('../functions.php');
date_default_timezone_set("Africa/lagos");
if($_SERVER['REQUEST_METHOD'] == "POST"){
	
	$path = json_decode(file_get_contents('php://input'));
	date_default_timezone_set("Africa/lagos");
	$email = decryptCookie($path->email);
	$product_id = $path->product_id;
	$quantity = 1;
								 
								$stmt = $conn->prepare("select prod_name,amount from products WHERE prod_id = ?");
								$stmt->bind_param("s", $product_id);
								$stmt->execute();
								$stmt->store_result();
	                            $stmt->bind_result($prod_name,$price);
								$stmt->fetch();
									$prod_name;$price;
	                            $stmt->close();
								
								$chars = "abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
								$random = substr(str_shuffle( $chars ), 0, 5);
								date_default_timezone_set("Africa/lagos");
								$date1 = date("Y-m-d H:i:s");
									
								$query = $conn->query("SELECT * FROM ordered_products where email = '$email' and product_id='$product_id'");
								if($query->num_rows == 0){
								
								$stmt = $conn->prepare("INSERT INTO ordered_products (product_id,email,product_name,price,quantity,date) VALUES (?, ?, ?, ?, ?, ?)");
									
                                $stmt->bind_param("ssssss",$product_id,$email,$prod_name,$price,$quantity,$date1);
								
								if(mysqli_stmt_execute($stmt)){
									$response = ['result' =>  1, 'message' => "Product added to cart"];
								}else{
										echo "ERROR: Could not execute query: $stmt. " . mysqli_error($conn);
									 }
								}else{
									$response = ['result' =>  2, 'message' => "You already added this product to cart"];
								}
	
									echo json_encode($response);							 
}								
?>