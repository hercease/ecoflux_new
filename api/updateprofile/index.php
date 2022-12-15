<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include "../connection.php";
include('../functions.php');
if($_SERVER['REQUEST_METHOD'] == "POST"){

    $file = "";
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$address = $_POST['address'];
	$email = decryptCookie($_POST['email']);
  
	
	$stmt = $conn->prepare("SELECT profile FROM members WHERE email = ?");
	$stmt->bind_param("s",$email);
	$stmt->execute();
	$stmt->store_result();
	$stmt->bind_result($imagename);
	$stmt->fetch();
		$imagename;
	$stmt->close();
	
	if($address==''){
		$response = ['status' => 1, 'message' => 'Sorry, address can not be empty'];
	}elseif($phone==''){
		$response = ['status' => 2, 'message' => 'Sorry, phone can not be empty'];
	}elseif($name==''){
		$response = ['status' => 3, 'message' => 'Sorry, name can not be empty'];
	}else{
	
		if(isset($_FILES["image"]["type"])){
			$filename = $_FILES["image"]['name'];
			$extension = pathinfo($filename, PATHINFO_EXTENSION);
			$newName = rand() . ".". $extension;
			$sourcePath = $_FILES['image']['tmp_name']; //  source path of the file
			$targetPath =  "../../public/".$newName;
			$filename = $_FILES['image']['name'];
			$file = $newName;
			move_uploaded_file($sourcePath,$targetPath) ; // Moving Uploaded file
			//file_put_contents($targetPath, $filename);
		}else{
			$file=$imagename;	
		}
	
	$stmt = $conn->prepare("UPDATE members SET profile = ?, name=?, address = ?, phone = ? where email = ?");
	$stmt->bind_param("sssss", $file, $name, $address, $phone, $email);
	$stmt->execute();
	$stmt->close();
	
	$response = ['status' => 4, 'message' => 'Profile updated Successfully'];
}
	echo json_encode($response);
}
?>