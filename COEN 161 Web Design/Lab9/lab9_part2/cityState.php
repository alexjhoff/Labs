<?php 

// Fill up an array with city and zip codes
$zip['95053'] = 'Santa Clara, CA';
$zip['94901'] = 'San Rafael, CA';
$zip['93921'] = 'Carmel, CA';
$zip['95101'] = 'San Jose, CA';

if (isset($_GET['param'])){
	$zipcode = $_GET['param'];
	$return_value = $zip[$zipcode];

	echo $return_value;
}
else{
	echo "No city found";
}
?>
