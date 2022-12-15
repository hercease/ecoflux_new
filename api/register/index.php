<?PHP
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include "../connection.php";
include "../functions.php";
date_default_timezone_set("Africa/lagos");
if($_SERVER['REQUEST_METHOD'] == "POST"){
	
$user = json_decode(file_get_contents('php://input'));

$email = $user->email;
$name = $user->name;
$phone = $user->phone;
$password = $user->password;

$encrypt = password_hash($password,PASSWORD_DEFAULT);
$date1 = date("Y-m-d H:i:s");
$empty="";
$used="used";

$stmt1 = $conn->prepare("SELECT email FROM members where email = ?");
$stmt1->bind_param("s", $email);
$stmt1->execute();
$result1 = $stmt1->get_result();

$stmt2 = $conn->prepare("SELECT phone FROM members where phone= ? ");
$stmt2->bind_param("s", $phone);
$stmt2->execute();
$result2 = $stmt2->get_result();

$body="<table class='body-wrap' style='font-family: Helvetica Neue,Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: transparent; margin: 0;'>
                                    <tr style='font-family: Helvetica Neue,Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;'>
                                        <td style='font-family: Helvetica Neue,Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;' valign='top'></td>
                                        <td class='container' width='600' style='font-family: Helvetica Neue,Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;' valign='top'>
                                            <div class='content' style='font-family: Helvetica Neue,Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;'>
                                                <table class='main' width='100%' cellpadding='0' cellspacing='0' itemprop='action' itemscope itemtype='http://schema.org/ConfirmAction' style='font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; margin: 0; border: none;'>
                                                    <tr style='font-family: Helvetica Neue,Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;'>
                                                        <td class='content-wrap' style='font-family: Helvetica Neue,Helvetica,Arial,sans-serif; box-sizing: border-box; color: #495057; font-size: 14px; vertical-align: top; margin: 0;padding: 30px; box-shadow: 0 0.75rem 1.5rem rgba(18,38,63,.03); ;border-radius: 7px; background-color: #fff;' valign='top'>
                                                            <meta itemprop='name' content='Confirm Email' style='font-family: Helvetica Neue,Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;' />
                                                            <table width='100%' cellpadding='0' cellspacing='0' style='font-family: Helvetica Neue,Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;'>
                                                                <tr style='font-family: Helvetica Neue,Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;'>
                                                                    <td class='content-block' style='font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align:center; margin: 0; padding: 0 0 20px;' valign='top'>
                                                                        <center><img src='https://ecofluxng.com/log.png' width='120px' /></center>
                                                                    </td>
                                                                </tr>
																 <tr style='font-family: Helvetica Neue,Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;'>
                                                                    <td class='content-block' style='font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;' valign='top'>
                                                                        Hi, $name
                                                                    </td>
                                                                </tr>
                                                                <tr style='font-family: Helvetica Neue,Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;'>
                                                                    <td class='content-block' style='font-family: Helvetica Neue,Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 14px 0 20px;' valign='top'>
																		Your Email was just registered on Ecoflux, Kindly click the button below to confirm you are the one.
                                                                    </td>
                                                                </tr>
																<tr style='font-family: Helvetica Neue,Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;'>
                                                                    <td class='content-block' itemprop='handler' itemscope='' itemtype='http://schema.org/HttpActionHandler' style='font-family: Helvetica Neue,Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;' valign='top'>
                                                                        <a href='http://localhost/ecoflux/confirmation?user=$email' itemprop='url' style='font-family: Helvetica Neue,Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background-color: #34c38f; margin: 0; border-color: #34c38f; border-style: solid; border-width: 8px 16px;'>Confirm
                                                                            email address</a>
                                                                    </td>
                                                                </tr>
                                                                <tr style='font-family: Helvetica Neue,Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;'>
                                                                    <td class='content-block' style='font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;' valign='top'>
                                                                        <b>Ecoflux Team</b>
                                                                    </td>
                                                                </tr>
        
                                                                <tr style='font-family: Helvetica Neue,Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;'>
                                                                    <td class='content-block' style='text-align: center;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0;' valign='top'>
                                                                        © 2022 Ecoflux
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                </table>";

if($result1->num_rows > 0)
	$response = ['status' => 1, 'message' => 'Sorry, email already exist!'];
elseif($result2->num_rows > 0)
	$response = ['status' => 2, 'message' => 'Sorry, phone number already exist!'];
else{
	
	$send = sendmail($email,$name,$body);
	$stmt4 = $conn->prepare("INSERT INTO members (name,email,password,date,phone,status) VALUES (?, ?, ?, ?, ?, ?)");
	$stmt4->bind_param("ssssss",$name,$email,$encrypt,$date1,$phone,$empty);
	$stmt4->execute();
	
	if($stmt4){
		//echo "4";
		$response = ['status' => 4, 'message' => 'Congratulations, Your registration was successful, a confirmation mail has been sent to your registered email address'];
	} else {
				echo "ERROR: Could not execute query: $stmt4. " . mysqli_error($conn);
		}
	}
	
	echo json_encode($response);
}
?>