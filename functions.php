<?php
function sanitize($data) {
    $data = trim($data);
    if(get_magic_quotes_gpc()) {
    	$data = stripslashes($data);
    }
    $data = mysql_real_escape_string($data);
    return $data;
}

function spamcheck($field) {
	$field=filter_var($field, FILTER_SANITIZE_EMAIL);
	
	if(filter_var($field, FILTER_VALIDATE_EMAIL)) {
		return TRUE;
	} else {
		return FALSE;
	}
}
?>