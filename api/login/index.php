<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include('../connection.php');
include('../functions.php');
	
if($_SERVER['REQUEST_METHOD'] == "POST"){

$user = json_decode( file_get_contents('php://input'));
	

	$email=trim($user->email);
	$password=trim($user->password);
	date_default_timezone_set("Africa/lagos");

    $stmt = $conn->prepare("SELECT password,status FROM members WHERE email=?");
	$stmt->bind_param("s", $email);
	$stmt->execute();
	$stmt->store_result();
	$stmt->bind_result($password1,$status);
	$stmt->fetch();
		$password1;$status;
	$stmt->close();

	
$stmt = $conn->prepare("SELECT email FROM members where email=?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result1 = $stmt->get_result();	

if($result1->num_rows == 0){
		$response = ['status' => 1, 'message' => 'Sorry, Email entered does not exist!'];
}elseif($status==''){
	$response = ['status' => 3, 'message' => "Account is not yet activated, kindly log on to your email to activate your account through the mail sent to you"];
}elseif(password_verify($password, $password1)){
		 $value = encryptCookie($email);
		 $response = ['status' => 2, 'message' => $value];	 
}else{
		$response = ['status' => 3, 'message' => 'Password does not belong to the email entered'];
}
	
	echo json_encode($response);
}
?>