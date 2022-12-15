<?php
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include "../connection.php";
date_default_timezone_set("Africa/lagos");
if($_SERVER['REQUEST_METHOD'] == "GET"){
	  
			$sql = "SELECT prod_category.cat_name, products.prod_id FROM products JOIN prod_category on prod_category.cat_name = products.prod_category limit 5";
			$result = mysqli_query($conn,$sql) or  die('error: ' . mysqli_connect_error());
			$num_results = mysqli_num_rows($result);
	
			 while($row = mysqli_fetch_array($result)){
				 
				 $category_name = htmlentities($row['cat_name']);
				 $prod_id = htmlentities($row['prod_id']);
				 
				 $queryNum = $conn->query("SELECT COUNT(*) as postNum FROM products where prod_category = '$category_name'");
				 $resultNum = $queryNum->fetch_assoc();
				 $rowCount = $resultNum['postNum'];
				 
				$stmt1 = $conn->prepare("SELECT imagename FROM product_images WHERE prod_id = ? order by rand()");
				$stmt1->bind_param("s",$row['prod_id']);
				$stmt1->execute();
				$stmt1->store_result();
				$stmt1->bind_result($imagename);
				$stmt1->fetch();
					$imagename;
				$stmt1->close();
			
		
					$data[] = array(
						"category" => $category_name,
						"prod_count" => $rowCount,
						"imagename" => $imagename,
					);
			
			 }
	  
			$response = ['result' =>  $data];
	
			echo json_encode($response);
	}
?>