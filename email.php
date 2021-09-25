<?php
    function Email()
    {
        if(isset($_POST['action']))
        {
            $Body="";
            $EmailTo = "cii@cii-online.in";
            $Subject =$_POST['Subject'];
            $name = $_POST['Name'];
            $message = $_POST['Message'];
            $Body.= "Name: ";
            $Body.= $name;
            $Body.= "\n"; 
            $Body.="Blog:";
            $Body.= "\n"; 
            $Body.= $Blogname; 
            $Body.= "\n"; 
            $Body.= "Message: ";
            $Body.= $message;
            $Body.= "\n";
            $success = mail($EmailTo, $Subject, $Body); 
            if($success)
            {
                header("Location: thankyou.html");
            }
            else
            {
                header("Location: Errormailing.html");
            }
        }
          
    }

    Email();
?>