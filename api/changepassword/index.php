<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

if($_SERVER['REQUEST_METHOD'] == "POST"){

    $user = json_decode( file_get_contents('php://input'));
	include('../connection.php');
	include('../functions.php');
		
	$email = decryptCookie($user->user);
	$password=trim($user->password);
	$old=trim($user->old_password);
	$new1=trim($user->password);
	$new3 = password_hash($new1,PASSWORD_DEFAULT);
	$new2=trim($user->confirmpassword);
	
	$stmt = $conn->prepare("SELECT password FROM members WHERE email=? ");
		$stmt->bind_param("s", $email);
		$stmt->execute();
		$stmt->store_result();
		$stmt->bind_result($password1);
		$stmt->fetch();
			$password1;
		$stmt->close();
		if(!password_verify($old,$password1)){
			$response = ['status' => 1, 'message' => 'Sorry, your old password is not correct!'];
		}else{
	
			if($new1==$new2){
			
				$stmt = $conn->prepare("UPDATE members SET password = ? where email = ?");
				$stmt->bind_param("ss", $new3, $email);
				$stmt->execute();
				$stmt->close();
			
				$response = ['status' => 3, 'message' => 'Password was changed successfully, you will be logged out to log in again!'];
			}
			else{
				$response = ['status' => 2, 'message' => 'Your new password does not match!'];
			}
		
		}

	echo json_encode($response);
}
?>