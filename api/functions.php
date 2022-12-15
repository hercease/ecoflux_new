<?php
function count_rate_data($conn,$rate_number,$product_id)
{
	$result = mysqli_query($conn, "SELECT count(id) AS value_sum FROM product_ratings where product_id='$product_id'"); 
	$row = mysqli_fetch_assoc($result); 
	$tot_stars = $row['value_sum'];

    $sql="SELECT count(id) as number_record FROM product_ratings where product_id = '$product_id' and rating ='".$rate_number."' ";
    $result = mysqli_query($conn, $sql);
    $data = mysqli_fetch_array($result);
    if(!empty($data['number_record']))
    {
       $count = $data['number_record'];
    }else{
	    $count = 0;
	}
	 return $percent = round($count * 100 / $tot_stars, 1);
}

function random_string($length) {
    return substr(bin2hex(random_bytes($length)), 0, $length);
}


function encryptCookie( $value ) {

   $byte= random_string(20);
   $key = "ecoflux";

   $cipher = "AES-256-CBC";
   $ivlen = openssl_cipher_iv_length($cipher);
   $iv = openssl_random_pseudo_bytes($ivlen);

   $ciphertext = openssl_encrypt($value, $cipher, $key, 0, $iv);

   return( base64_encode($ciphertext . '::' . $iv) );
}

// Decrypt cookie
function decryptCookie( $ciphertext ) {

   $cipher = "AES-256-CBC";
	$key = "ecoflux";
   $parts = explode('::', base64_decode($ciphertext));
   return openssl_decrypt($parts[0], $cipher, $key, 0, $parts[1]);

}


function timeAgo($time_ago){
	date_default_timezone_set("Africa/lagos");
//$cur_time 	= time();
$cur_time = strtotime(date("Y-m-d H:i:s"));
$time_elapsed 	= $cur_time - strtotime($time_ago);
$seconds 	= floor($time_elapsed);
$minutes 	= floor($time_elapsed / 60 );
$hours 		= floor($time_elapsed / 3600);
$days 		= floor($time_elapsed / 86400 );
$weeks 		= floor($time_elapsed / 604800);
$months 	= floor($time_elapsed / 2600640 );
$years 		= floor($time_elapsed / 31207680 );
// Seconds
if($seconds <= 60){
	$time = "$seconds secs ago";
}
//Minutes
else if($minutes <=60){
	if($minutes==1){
		$time =  "one min ago";
	}
	else{
		$time =  "$minutes mins ago";
	}
}
//Hours
else if($hours <=24){
	if($hours==1){
		$time =  "an hr ago";
	}else{
		$time = "$hours hrs ago";
	}
}
//Days
else if($days <= 7){
	if($days==1){
		$time =  "yesterday";
	}else{
		$time =  "$days days ago";
	}
}
//Weeks
else if($weeks <= 4.3){
	if($weeks==1){
		$time = "a week ago";
	}else{
		$time =  "$weeks wks ago";
	}
}
//Months
else if($months <=12){
	if($months==1){
		$time =  "a month ago";
	}else{
		$time =  "$months months ago";
	}
}
//Years
else{
	if($years==1){
	$time = "one year ago";
	}else{
		$time = "$years years ago";
	}
}
return $time;
}

use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\Exception;

function sendmail($email,$name,$body){
require '../../PHPMailer/src/Exception.php';
require '../../PHPMailer/src/PHPMailer.php';
require '../../PHPMailer/src/SMTP.php';


$mail = new PHPMailer(true);

try {
   
    $mail->isSMTP();                             
    $mail->Host       = 'p3plzcpnl455590.prod.phx3.secureserver.net';      
    $mail->SMTPAuth   = true;                          
    $mail->Username   = 'contact@assetfinance.bainescredit.com';    
    $mail->Password   = 'F{nTqIORBZDr';             
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;   
    $mail->Port       = 465;               

    //Recipients
    $mail->setFrom('contact@assetfinance.bainescredit.com', 'Ecoflux');
    $mail->addAddress("$email", "$name"); 
    
    $mail->isHTML(true); 
    $mail->Subject = 'Welcome to Ecoflux';
    $mail->Body    = $body;

    $mail->send();
    return '1';
} catch (Exception $e) {
    return "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
}
?>