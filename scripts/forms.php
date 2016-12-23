<?
	header("Content-Type: text/plain");
	date_default_timezone_set('America/Mexico_City');
	sleep(1);

	$name = $tel = $mail = $info = $type = "";

	if($_SERVER["REQUEST_METHOD"] == "POST"){
		$name = test_data($_POST["name"]);
		$tel = test_data($_POST["tel"]);
		$mail = test_data($_POST["mail"]);
		$info = test_data($_POST["info"]);
		$type = test_data($_POST["type"]);

		$to = "";
		$subject ="Tienes un nuevo mensaje de tu sitio AT Ingeniería Eléctrica";

		if($type == "contact"){
			$to = "clientes@at-ingenieria.com.mx";
		}	
		else{
			$to = "ventas@at-ingenieria.com.mx";
		}

		$headers ="From: AT Ingeniería Eléctrica <forms@at-ingenieria.com.mx>\n";
		$headers.="Subject: $subject\n";
		$headers.="To: Contacto AT <$to>\n";
		$headers.="Date: ".date("D, j M Y H:i:s O")."\n";
		$headers.="MIME-Version: 1.0\n";
		$headers.="Content-type: text/plain; charset=utf-8\n";
		$headers.="X-Accept-Language: es-mx, es\n";
		$headers.="X-Mailer: PHP/".phpversion();

		$message ="Hola, hemos recibido un nuevo mensaje de AT Ingeniería Eléctrica el día ".date("d/m/Y")." a las ".date("H:i")." (Tiempo de la Ciudad de México).\n\n";
		$message.="De: $name\n";
		$message.="Correo Electrónico: $mail\n";
		$message.="Teléfono: $tel\n";
		$message.="Mensaje: $info\n";

		try{
			if(mail("abrahamlp@gmail.com",$subject,$message,$headers)){
				echo "1";
			}
			else{
				echo "0";
			}
		}
		catch(Exception $e){
			echo "0";
		}
	}	
	else{
		echo "0";
	}

	function test_data($data){
		  $data = trim($data);
		  $data = stripslashes($data);
		  $data = htmlspecialchars($data);
		  return $data;
	}
?>