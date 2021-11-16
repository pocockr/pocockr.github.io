 
				
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
			  
			
			 else if (passWord.value.length!=9)
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

			
			
function calculateOrderTotal()
			{
			
			//var z;
			var burger;	
			var price=0.00;
			var quantity=0;
			var total=0.00;
			var discount=0.9;
			
			var z = document.getElementById("BurgerSize");
			var burger = z.options[z.selectedIndex].value;
			//var burger = document.getElementById("BurgerSize").value;
			var quantity = document.getElementById("BurgerQuantity").value;
			var discountCode = document.getElementById("DiscountCode").value;
			
			if (burger == "Large")
				  {
				  price = 7;
				  } 
			else if (burger == "Extra-Large")		
				{
				price = 9;
				}
			else
				{
				price = 17.50;
				}
			
			
			
			if (discountCode == "tacotopping" || discountCode == "TACOTOPPING")
				{
				total = (price * quantity) * discount;	
				}	
			else
				{
				total = price * quantity;	
				}		
			
			document.getElementById("orderDetail").innerHTML = "You chose " + quantity + " " + burger + " burger/s.";

			
			if (discountCode == "tacotopping" || discountCode == "TACOTOPPING")
				{
				document.getElementById("discountDetail").innerHTML = "You received a discount of 10% on this order."
				}	
			else
				{
				document.getElementById("discountDetail").innerHTML = "There was no discount on this order."
				}		
				
			document.getElementById("total").innerHTML = "Bill total: €" + total;
		
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


			
	
/*
function myFunction() {
			  var x = document.getElementById("order");
			  
			  if (x.style.display == "none") 
			  {
				x.style.display = "block";
			  } else 
			  {
				x.style.display = "none";
			  }
			  
			  
			  var y = document.getElementById("login");
			  
			  if (y.style.display == "none") 
			  {
				y.style.display = "block";
			  } else 
			  {
				y.style.display = "none";
			  }
}
*/

 //This was the stipulation before I got the JQuery working
 /*
 function changeFunc() {
    var selectSize = document.getElementById("BurgerSize");
    var selectedValue = selectSize.options[selectSize.selectedIndex].value;
    if(selectedValue == "Supersize")
	{
		 alert("Warning!!! This burger is unhealthy!!")
	}
   }
*/



//JQuery for the supersize stipulation
    $("#BurgerSize").change(function(){
		
		var selectedSize = $(this).children("option:selected").val();
		
		if(selectedSize == "Supersize")
		{
		$( "#stipulation" ).text( "Warning!!! This is a big ol' burger!!!" ).show().fadeOut( 4000 ); //I decided to go with the fadeout function
		}
    });


    $(function() {
        $.get('dataset_2010-2021.csv', function(data) {
            $('#CSVSource').html('<pre>' + data + '</pre>');
        });
        $('#CSVTable').CSVToTable('dataset_2010-2021.csv', { loadingImage: 'images/loading.gif', startLine: 0 });
        $.get('dataset_2010-2021.csv', function(data) {
            $('#CSVSource').html('<pre>' + data + '</pre>');
        });
        //$('#TSVTable').CSVToTable('dataset_2010-2021.tsv', { loadingText: 'Loading TSV Data...', loadingImage: 'images/loading.gif', startLine: 0, separator: "\t" });
        //$('#CSVTable2').CSVToTable('dataset_2010-2021.csv', { loadingImage: 'images/loading.gif', startLine: 1, headers: ['Album Title', 'Artist Name', 'Price ($USD)'] }).bind("loadComplete",function() { 
            //$('#CSVTable2').find('TABLE').tablesorter();
        //});;
    });

	