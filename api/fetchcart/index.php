<?php
error_reporting(E_ALL);
header("Access-Control-Allow-Origin:  *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include "../connection.php";
include "../functions.php";
date_default_timezone_set("Africa/lagos");
if($_SERVER['REQUEST_METHOD'] == "GET"){
	
	$path = explode('/', $_SERVER['REQUEST_URI']);
	$email = decryptCookie($path[4]);      
	
	$query = $conn->query("SELECT * FROM ordered_products where email = '$email' and payment_id=''");
    if($query->num_rows > 0){
			$totalPrice = 0;
		while($row = $query->fetch_assoc()){
			
				$stmt1 = $conn->prepare("SELECT imagename FROM product_images WHERE prod_id = ?");
				$stmt1->bind_param("s",$row['product_id']);
				$stmt1->execute();
				$stmt1->store_result();
				$stmt1->bind_result($imagename);
				$stmt1->fetch();
					$imagename;
				$stmt1->close();
				
				
			$data[] = array(
				"id" => $row['id'],
				"product_id" => $row['product_id'],
				"product_name" => $row['product_name'],
				"price" => number_format($row['price']),
				"sub_total" => number_format($row['quantity'] * $row['price']),
				"imagename" => $imagename,
                "quantity" => $row['quantity'],
				"total_price" => number_format($totalPrice += $row['quantity'] * $row['price']),
			);
	  
		}
		
		$response = ['result' =>  $data];
	
	}
	
	echo json_encode($response);
	
}
?>