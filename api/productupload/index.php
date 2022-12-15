<?php
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include "../connection.php";
include "../functions.php";
date_default_timezone_set("Africa/lagos");
$chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
$random = substr( str_shuffle( $chars ), 0, 6 );
$date1 = date("Y-m-d H:i:s");
$response = array();
$extension_type="image";
$name = $_POST['name'];
$weight = $_POST['weight'];
$dimension = $_POST['dimension'];
$price = $_POST['price'];
$description = $_POST['description'];
$email = decryptCookie($_POST['email']);

if($_POST['category']=="others"){
	$category=$_POST['customcategory'];
}else{
	$category=$_POST['category'];
}

	$stmt1 = $conn->prepare("SELECT cat_name FROM prod_category where cat_name=?");
	$stmt1->bind_param("s", $category);
	$stmt1->execute();
	$result1 = $stmt1->get_result();
	if($result1->num_rows == 0){
		$stm = $conn->prepare("INSERT INTO prod_category (cat_name) VALUES(?)");
		$stm->bind_param("s",$category);
		$stm->execute();
	}

	$stmt3 = $conn->prepare("INSERT INTO products (prod_id, email, prod_name, prod_category, prod_weight, prod_dimension, date, amount, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
	$stmt3->bind_param("sssssssss",$random, $email, $name, $category, $weight, $dimension, $date1, $price, $description);
	$stmt3->execute();

if($_FILES['file']){
	$no = count($_FILES['file']['name']);
	for ($i=0; $i < $no ; $i++) {
	$filename = $_FILES['file']['name'][$i];
      if($filename != "") {
		$extension = pathinfo($filename, PATHINFO_EXTENSION);
	    $allowExtn = array('png', 'jpeg', 'jpg');
		$newName = rand() . ".". $extension;
		$location = "../../public/".$newName;
		if(move_uploaded_file($_FILES['file']['tmp_name'][$i], $location)){
		
        // Execute query
		$query = $conn->prepare("INSERT INTO product_images (prod_id,imagename) VALUES(?,?)");
		$query->bind_param("ss",$random,$newName);
		$query->execute();
		
		if($query){
			$response = ['status' => 1, 'message' => 'Product Submitted Successfully'];
		} else {
			$response = ['status' => 0, 'message' => 'There was an error'];
		}		
    }
	}
	}
		
	echo json_encode($response);
}
?>