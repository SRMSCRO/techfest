const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
// <-----------------------------VISUAL SCRIPT--------------------------->
function vis(){
	document.getElementById('Profile').style.display ="contents";
document.getElementById('Analytics').style.display ="none";
document.getElementById('Add_lead').style.display ="none";
document.getElementById('lead_submitted').style.display ="none";
document.getElementById('lead_assigned').style.display ="none";
}
function vis1(){
	document.getElementById('Profile').style.display ="contents";
document.getElementById('Analytics').style.display ="none";
document.getElementById('Add_lead').style.display ="none";
document.getElementById('lead_submitted').style.display ="none";
document.getElementById('lead_assigned').style.display ="none";
}
function vis2(){
	document.getElementById('Analytics').style.display ="contents";
document.getElementById('Profile').style.display ="none";
document.getElementById('Add_lead').style.display ="none";
document.getElementById('lead_submitted').style.display ="none";
document.getElementById('lead_assigned').style.display ="none";
}
function vis3(){
	document.getElementById('Add_lead').style.display ="contents";
document.getElementById('Profile').style.display ="none";
document.getElementById('Analytics').style.display ="none";
document.getElementById('lead_submitted').style.display ="none";
document.getElementById('lead_assigned').style.display ="none";
}
function vis4(){
	document.getElementById('lead_submitted').style.display ="contents";
document.getElementById('Profile').style.display ="none";
document.getElementById('Analytics').style.display ="none";
document.getElementById('Add_lead').style.display ="none";
document.getElementById('lead_assigned').style.display ="none";
}
function vis5(){
	document.getElementById('lead_assigned').style.display ="contents";
document.getElementById('Profile').style.display ="none";
document.getElementById('Analytics').style.display ="none";
document.getElementById('Add_lead').style.display ="none";
document.getElementById('lead_submitted').style.display ="none";
}
// <-----------------------------VISUAL SCRIPT END ---------------------->