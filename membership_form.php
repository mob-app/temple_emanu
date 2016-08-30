		<?php
		// echo 1;
		// exit();
	$request = $_GET['query']; //echo $request;

	if($request == 'mail')
	{
		$name = $_POST['name'];
		$street = $_POST['street'];
		$address_line2= $_POST['address_line2'];
		$city = $_POST['city'];
		$state= $_POST['state'];
		$code= $_POST['code'];
		$country= $_POST['country'];
		$phone= $_POST['phone'];
		$mobile= $_POST['mobile'];
		$email= $_POST['email'];
		$closter_area= $_POST['closter_area'];
		$affiliation = $_POST['affiliation'];
		$area = "";

		 if(!empty($_POST['area'])) {

       $area = $_POST['area'];
        

        }


		// echo $name;
		// echo $area;


		// $table = $_POST['table'];
			 // $subject = $_POST['subject'];
			 $subject = "Membership Information Form";
		$con = mysqli_connect('localhost','root','','temple_emanu-el');

			$ins = "INSERT INTO `temple_emanu-el` . `user1` (`name`,`street`,`address_line2`,`city`,`state`,`code`,`country`,`phone`,`mobile`,`email`,`area`,`affiliation`,`closter_area`) values('".$name."','".$street."','".$address_line2."','".$city."','".$state."','".$code."','".$country."','".$phone."','".$mobile."','".$email."','".$area."','".$affiliation."','".$closter_area."') ";
		// echo $ins;
		$sql = mysqli_query($con,$ins);

			if ($sql)
			 {
				
				$to = "corrubia@templeemanu-el.com";
				
				$result  = send_mail($email,$to,$subject,$name,$affiliation);
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

	function send_mail($emailfrom,$emailto,$subject,$name,$affiliation)
	{
		
		
		
		
		
		$header = "From:".$emailfrom."" . "\r\n";
		
		ini_set('sendmail_from', $emailfrom);

		if(mail($emailto,$subject,$affiliation,$header,$name))
			return true;
		else
			return false;
	}

	?>