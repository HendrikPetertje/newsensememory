<?php $name = $_POST['name'];
$email = $_POST['email'];
$formcontent="From: $name \n $email heeft zich ingeschreven voor de mail lijst";
$recipient = "peter@picoreclame.nl";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("er ging iets mis, ga naar de vorige pagina en probeer het nog eens!");
echo "<script>
alert('bedankt voor het invullen u bent ingescreven');
window.location.href = '/';</script>";
?>
