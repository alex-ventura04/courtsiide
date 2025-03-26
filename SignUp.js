
$(document).ready(function(){
});

$("img").click(function(){
		two("clicked image");
});

function showError(message){
	alert(message);
}

$("#sbutton").click(function(){
	validateForm();
});

function validateForm(){
	var fname = $("#fname").val();
	var lname = $("#lname").val();
	var email = $("#email").val();
	var tel = $("#tel").val();
	var pword = $("#password").val();
	var repassword= $("#repassword").val();
	
	if(fname.length < 1)
	{
		showError("Please enter a valid first name");
	}
	else if (lname.length < 1)
	{
		showError("Please enter a valid last name");
	}
	else if (!validateEmail(email))
	{
		showError("Please enter a valid email");
	}
	else if (tel.length != 10){
		showError("Phone numbers must be 10 digits");
	}
	else if (pword.length < 6 && pword != repassword){
		showError("Your password must be 6 digits and match confirm password");
	}
	else{
		alert("Thank you for signing up!");
	}
	
	
}
function validateEmail(email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}
