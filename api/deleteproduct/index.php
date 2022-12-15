<?PHP
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include "../connection.php";
include('../functions.php');
date_default_timezone_set("Africa/lagos");
if($_SERVER['REQUEST_METHOD'] == "POST"){

	$user = json_decode( file_get_contents('php://input') );
	$prod_id = $user->id;
	//$data = array();
	
$stmt = $conn->prepare("SELECT imagename FROM product_images WHERE prod_id = ?");
$stmt->bind_param("s",$prod_id);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($imagename);
$stmt->fetch();
	$imagename;
$stmt->close();

			unlink("../../public/".$imagename);
	
			$stmt = $conn->prepare("DELETE from products where prod_id = ?");
			$stmt->bind_param("s", $prod_id);
			$stmt->execute();
			$stmt->close();	
	
			$response = ['status' => 1, 'message' => 'Product was deleted successfully'];
	
			echo json_encode($response);
	
}
?>