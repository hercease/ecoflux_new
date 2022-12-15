<?php
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include "../connection.php";
date_default_timezone_set("Africa/lagos");
if($_SERVER['REQUEST_METHOD'] == "POST"){
if($_POST['category']=="others"){
	$category=$_POST['custom_category'];
}else{
	$category=$_POST['category'];
}

$product_name = $_POST['productname'];
$brand = $_POST['brand'];
$description = $_POST['description'];
$product_weight = $_POST['weight'];
$product_dimension = $_POST['dimension'];
$product_amount = $_POST['price'];
$chars = "0123456789";
$random = substr( str_shuffle( $chars ), 0, 6 );

$date1 = date("Y-m-d H:i:s");
$stmt1 = $conn->prepare("SELECT cat_name FROM prod_category where cat_name = ?");
	$stmt1->bind_param("s", $category);
	$stmt1->execute();
	$result1 = $stmt1->get_result();
	if($result1->num_rows == 0){
		$stm = $conn->prepare("INSERT INTO prod_category (cat_name) VALUES(?)");
		$stm->bind_param("s",$category);
		$stm->execute();
	}
	
	$stmt3 = $conn->prepare("INSERT INTO products (prod_id, prod_name, prod_category, prod_weight, prod_dimension, date, amount, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
	$stmt3->bind_param("sssssssss",$random,$product_name,$category,$product_weight,$product_dimension,$date1,$product_amount,$description,$brand);
	$stmt3->execute();


	if(!empty($_FILES)) {
    for($i=0; $i < sizeof($_FILES['file']['name']); $i++) {
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
		}
	  }
    }
  }
	
echo "1";
}		
?>