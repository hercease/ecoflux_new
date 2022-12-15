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
	 $page = $path[4];
	 $search = $path[5];

	  $per_page_record = 20;
	  $orderSQL = "";
	  $whereSQL = '';
	
	if(!empty($search)){
        $whereSQL = " where prod_name LIKE '%".$search."%' OR prod_category LIKE '%".$search."%' OR prod_weight LIKE '%".$search."%' OR amount LIKE '%".$search."%' OR description LIKE '%".$search."%'";
    }
	  
	$queryNum = $conn->query("SELECT COUNT(*) as postNum FROM products $whereSQL");
    $resultNum = $queryNum->fetch_assoc();
    $rowCount = $resultNum['postNum'];
	
	$total_pages = ceil($rowCount / $per_page_record); 
	$start = ($page-1) * $per_page_record;       
	
	$query = $conn->query("SELECT * FROM products $whereSQL LIMIT $start,$per_page_record");
    if($query->num_rows > 0){
		while($row = $query->fetch_assoc()){
			
				$stmt1 = $conn->prepare("SELECT imagename FROM product_images WHERE prod_id = ? order by rand()");
				$stmt1->bind_param("s",$row['prod_id']);
				$stmt1->execute();
				$stmt1->store_result();
				$stmt1->bind_result($imagename);
				$stmt1->fetch();
					$imagename;
				$stmt1->close();
				
			$data[] = array(
				"id" => $row['id'],
				"prod_id" => $row['prod_id'],
				"prod_name" => $row['prod_name'],
				"price" => number_format($row['amount']),
				"imagename" => $imagename,
                "current_page" => $start,		
                "total_page" => $total_pages,
				"per_page" => $per_page_record,
			);
	  
		}
		
		$response = ['result' =>  $data];
	
		echo json_encode($response);
	}
	
}
?>