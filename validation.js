function username(){
	var a=document.getElementById('user_value').value;
	var b=/^[A-Za-z ]{3,30}$/;
	if (b.test(a)) {
		document.querySelector("#user-field").classList="success";
	}
	else
	{
       document.querySelector("#user-field").classList="fail";
	}
}
function email(){
	var a=document.getElementById('email_value').value;
	var b=/^[A-Za-z._]{2,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,8}$/;
	if (b.test(a)) {
		document.querySelector("#email-field").classList="success";
	}
	else
	{
       document.querySelector("#email-field").classList="fail";
	}
}
function msg(){
	var a=document.getElementById('pass_value').value;
	var b=/^[A-Za-z ]{2,300}$/;
	if (b.test(a)) {
		document.querySelector("#pass-field").classList="success";
	}
	else
	{
       document.querySelector("#pass-field").classList="fail";
	}
}
