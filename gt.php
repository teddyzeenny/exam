<?php
	include('database.php');
	include('functions.php');
	
	$name = sanitize($_GET['name']);
	$email = sanitize($_GET['email']);

	if ($name=='' || $email=='') {
		echo 'Please fill all required fields';
		exit();
	}
	if (!spamcheck) {
		echo 'Invalid email';
		exit();
	}
	if (mysql_query("INSERT INTO gt (name, email) VALUES ('$name', '$email')")) {
		echo 'Thank you';
	} else {
		echo 'Error occured please try again';
	}
	
	mysql_close($con);
?>