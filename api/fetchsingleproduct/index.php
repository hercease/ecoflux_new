<?php
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include "../connection.php";
include('../functions.php');
date_default_timezone_set("Africa/lagos");
if($_SERVER['REQUEST_METHOD'] == "GET"){

	  $path = explode('/', $_SERVER['REQUEST_URI']);
	  $pat = $path[4];
	  
	  $image_array = array();
	  $data_array = array();
	  $final_array = array();
	
			$sql = "SELECT * from products WHERE prod_id = '$pat'";
	
			 $result = mysqli_query($conn,$sql) or  die('error: ' . mysqli_connect_error());
			 $num_results = mysqli_num_rows($result);
			 
			 while($row = mysqli_fetch_array($result)){
				  $data_array['weight'] = htmlentities($row['prod_weight']);
				  $data_array['category'] = htmlentities($row['prod_category']);
				  $data_array['prod_id'] = htmlentities($row['prod_id']);
				  $data_array['dimension'] = htmlentities($row['prod_dimension']);
				  $data_array['amount'] = number_format(htmlentities($row['amount']));
				  $data_array['description'] = nl2br($row['description']); 
				  $data_array['prod_name'] = htmlentities($row['prod_name']);
				  $data_array['image'] = array();
				
				 
				$select = "SELECT * FROM product_images where prod_id = '".$row['prod_id']."' ";  
				$res = mysqli_query($conn, $select);
				while($row3 = mysqli_fetch_array($res)){
				
				 $image_array['imagename'] = $row3["imagename"];
			    
				 array_push($data_array['image'],$image_array);
			
				}
				 
				 array_push($final_array,$data_array);
			 
			 }
	  
			$response = ['result' =>  $final_array];
	
			echo json_encode($response);
	
}
?>