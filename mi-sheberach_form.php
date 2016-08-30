<?php

// $request = $_GET['query']; //echo $request;
$request = "mail";
	if($request == 'mail')
	{
		$name = $_POST['name'];
		$email= $_POST['email'];
		$phone= $_POST['phone'];
		$persons = "";
		$ill_person = $_POST['ill_person'];
		$english_name = $_POST['english_name'];
		
		$person_father= $_POST['person_father'];
		$person_mother= $_POST['person_mother'];
		
		$relationship= $_POST['relationship'];
		
		$location= $_POST['location'];
		
		if(!empty($_POST['persons'])) {

       $persons = $_POST['persons'];
        

        }

		

	

		// $table = $_POST['table'];
			 // $subject = $_POST['subject'];
			 $subject = "Mi Sheberach List";
		$con = mysqli_connect('localhost','root','','temple_emanu-el');

			$ins = "INSERT INTO `temple_emanu-el` . `user2` (`name`,`email`,`phone`,`persons`,`english_name`,`ill_person`,`person_father`,`person_mother`,`relationship`,`location`) values('".$name."','".$email."','".$phone."','".$persons."','".$english_name."','".$ill_person."','".$person_father."','".$person_mother."','".$relationship."','".$location."') ";
		// echo $ins;
		$sql = mysqli_query($con,$ins);

			if ($sql)
			 {
				
				$to = "info@templeemanu-el.com";
				
				$result  = send_mail($email,$to,$subject,$name,$persons,$location,$phone);
				if($result)
					echo '1';
				else
					echo '0';
			}
			else
			{
				echo 'failed';
			}

	}
	else
	{
		echo 'failed';
	}

	function send_mail($emailfrom,$emailto,$subject,$name,$location)
	{
		
		
		
		
		
		$header = "From:".$emailfrom."" . "\r\n";
		
		ini_set('sendmail_from', $emailfrom);

		if(mail($emailto,$subject,$name,$header,$location))
			return true;
		else
			return false;
	}

	?>