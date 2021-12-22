 
				
function validateLoginForm()
			{
				
			var userName=document.forms["myLoginForm"]["username"].value;
			var passWord=document.forms["myLoginForm"]["pin"];

			if (userName==null || userName=="")
			  {
			  alert("Username is empty");
			  //document.getElementById("loginMessage").innerHTML = "Username is empty, please try again";
			  return true;
			  }  
			  
			
			 else if (passWord.value.length!=6)
			  {
			  alert("Password length is incorrect");
			  //document.getElementById("loginMessage").innerHTML = "Password length is incorrect, please try again";
			  return true;
			  }
			  
			  else 
			  {
				  //alert("Welcome " +  userName);
				  //document.getElementById("loginMessage").innerHTML = "Welcome " +  userName; // this actually became redundant when the login form is hidden!
				  return false; //This then becomes the validation to move on to the order form
			  } 
			  
			}

			
			



//JQuery functionality to hide the login form and show the order form once the user is validated.

$(document).ready(function(){ 

 $("#loginSubmit").click(function(){
    $("#login").hide();
  });
 
 $("#loginSubmit").click(function(){
    $("#order").show();
  });
 
});


			
	


//JQuery for the match prediction
    $("#MatchSelection").change(function(){
		
		var selectedMatch = $(this).children("option:selected").val();
		
		if(selectedMatch == "MatchOne")
		{
		$( "#prediction" ).text( "Predicted Result: Draw!" ).show().fadeOut( 4000 ); 
		}
		else if(selectedMatch == "MatchTwo")
		{
		$( "#prediction" ).text( "Predicted Result: Home Win!" ).show().fadeOut( 4000 ); 
		}
		else if(selectedMatch == "MatchThree")
		{
		$( "#prediction" ).text( "Predicted Result: Home Win!" ).show().fadeOut( 4000 ); 
		}
		else if(selectedMatch == "MatchFour")
		{
		$( "#prediction" ).text( "Predicted Result: Away Win!" ).show().fadeOut( 4000 ); 
		}
		else if(selectedMatch == "MatchFive")
		{
		$( "#prediction" ).text( "Predicted Result: Away Win!" ).show().fadeOut( 4000 ); 
		}
		else if(selectedMatch == "MatchSix")
		{
		$( "#prediction" ).text( "Predicted Result: Home Win!" ).show().fadeOut( 4000 ); 
		}
		else if(selectedMatch == "MatchSeven")
		{
		$( "#prediction" ).text( "Predicted Result: Draw!" ).show().fadeOut( 4000 ); 
		}
		else if(selectedMatch == "MatchEight")
		{
		$( "#prediction" ).text( "Predicted Result: Home Win!" ).show().fadeOut( 4000 ); 
		}
		else if(selectedMatch == "MatchNine")
		{
		$( "#prediction" ).text( "Predicted Result: Away Win!" ).show().fadeOut( 4000 ); 
		}
		else if(selectedMatch == "MatchTen")
		{
		$( "#prediction" ).text( "Predicted Result: Draw!" ).show().fadeOut( 4000 ); 
		}
		
    });


	