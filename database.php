<?php
$con = mysql_connect("localhost","gt","gt");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

//select database
mysql_select_db("gt", $con);
?>