<?php
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include "../connection.php";
date_default_timezone_set("Africa/lagos");
if($_SERVER['REQUEST_METHOD'] == "GET"){
	
	 $path = explode('/', $_SERVER['REQUEST_URI']);
	 $page =  $path[4];
	 $search =  $path[5];

	 $whereSQL = '';
	 $per_page_record = 5;
	  
	if(!empty($search)){
        $whereSQL = " WHERE cat_name LIKE '%".$search."%'";
    }
	
	$queryNum = $conn->query("SELECT COUNT(*) as postNum FROM prod_category $whereSQL");
    $resultNum = $queryNum->fetch_assoc();
    $rowCount = $resultNum['postNum'];
	
	$total_pages = ceil($rowCount / $per_page_record); 
	$offset = ($page > 1) ? ($per_page_record * ($page - 1)) : 0;
	
			
	$query = $conn->query("SELECT prod_category.cat_name, products.prod_id, (select COUNT(*) FROM products where  prod_category.cat_name = products.prod_category) AS prod_count FROM products JOIN prod_category on prod_category.cat_name = products.prod_category $whereSQL LIMIT $offset, $per_page_record");
    if($query->num_rows > 0){
		while($row = $query->fetch_assoc()){
				
				$category_name = htmlentities($row['cat_name']);
				$prod_id = htmlentities($row['prod_id']);
				$prod_count = htmlentities($row['prod_count']);
				
				$stmt1 = $conn->prepare("SELECT imagename FROM product_images WHERE prod_id = ? order by rand()");
				$stmt1->bind_param("s",$prod_id);
				$stmt1->execute();
				$stmt1->store_result();
				$stmt1->bind_result($imagename);
				$stmt1->fetch();
					$imagename;
				$stmt1->close();
				 
		
					$data[] = array(
						"category" => $category_name,
						"prod_count" => $prod_count,
						"prod_image" => $imagename,
						"total_num" => $total_pages
					);
			
	}
	
}

		$response = ['result' =>  $data];
	
		echo json_encode($response);
}

?>