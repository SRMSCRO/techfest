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
visFunction();
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
// <-----------------------------LEAD SUBMITTED ------------------------->
function visFunction() {
    document.getElementById("openimg").style.display = "contents";
    document.getElementById("validatedimg").style.display = "none";
    document.getElementById("rejectedimg").style.display = "none";
    document.getElementById("closedimg").style.display = "none";
   
   
    document.getElementById("openbtn").style.backgroundColor = "#F04705";
    document.getElementById("validatedbtn").style.backgroundColor = "#6c63ff";
    document.getElementById("rejectedbtn").style.backgroundColor = "#6c63ff";
    document.getElementById("closedbtn").style.backgroundColor = "#6c63ff";

}

function visFunction1() {
    document.getElementById("openimg").style.display = "none";
    document.getElementById("validatedimg").style.display = "contents";
    document.getElementById("rejectedimg").style.display = "none";
    document.getElementById("closedimg").style.display = "none";


    document.getElementById("openbtn").style.backgroundColor = "#6c63ff";
    document.getElementById("validatedbtn").style.backgroundColor = "#F04705";
    document.getElementById("rejectedbtn").style.backgroundColor = "#6c63ff";
    document.getElementById("closedbtn").style.backgroundColor = "#6c63ff";

}

function visFunction2() {
    document.getElementById("openimg").style.display = "none";
    document.getElementById("validatedimg").style.display = "none";
    document.getElementById("rejectedimg").style.display = "contents";
    document.getElementById("closedimg").style.display = "none";


    document.getElementById("openbtn").style.backgroundColor = "#6c63ff";
    document.getElementById("validatedbtn").style.backgroundColor = "#6c63ff";
    document.getElementById("rejectedbtn").style.backgroundColor = "#F04705";
    document.getElementById("closedbtn").style.backgroundColor = "#6c63ff";

}

function visFunction3() {
    document.getElementById("openimg").style.display = "none";
    document.getElementById("validatedimg").style.display = "none";
    document.getElementById("rejectedimg").style.display = "none";
    document.getElementById("closedimg").style.display = "contents";


    document.getElementById("openbtn").style.backgroundColor = "#6c63ff";
    document.getElementById("validatedbtn").style.backgroundColor = "#6c63ff";
    document.getElementById("rejectedbtn").style.backgroundColor = "#6c63ff";
    document.getElementById("closedbtn").style.backgroundColor = "#F04705";

}
//<----------------------------LEAD SUBMITTED ENDS---------------------->


function visFunction4() {
    document.getElementById("openimg_").style.display = "contents";
    document.getElementById("validatedimg_").style.display = "none";
    document.getElementById("rejectedimg_").style.display = "none";
    document.getElementById("closedimg_").style.display = "none";
   
   
    document.getElementById("open_btn").style.backgroundColor = "#F04705";
    document.getElementById("validated_btn").style.backgroundColor = "#6c63ff";
    document.getElementById("rejected_btn").style.backgroundColor = "#6c63ff";
    document.getElementById("closed_btn").style.backgroundColor = "#6c63ff";

}

function visFunction5() {
    document.getElementById("openimg_").style.display = "none";
    document.getElementById("validatedimg_").style.display = "contents";
    document.getElementById("rejectedimg_").style.display = "none";
    document.getElementById("closedimg_").style.display = "none";


    document.getElementById("open_btn").style.backgroundColor = "#6c63ff";
    document.getElementById("validated_btn").style.backgroundColor = "#F04705";
    document.getElementById("rejected_btn").style.backgroundColor = "#6c63ff";
    document.getElementById("closed_btn").style.backgroundColor = "#6c63ff";

}

function visFunction6() {
    document.getElementById("openimg_").style.display = "none";
    document.getElementById("validatedimg_").style.display = "none";
    document.getElementById("rejectedimg_").style.display = "contents";
    document.getElementById("closedimg_").style.display = "none";


    document.getElementById("open_btn").style.backgroundColor = "#6c63ff";
    document.getElementById("validated_btn").style.backgroundColor = "#6c63ff";
    document.getElementById("rejected_btn").style.backgroundColor = "#F04705";
    document.getElementById("closed_btn").style.backgroundColor = "#6c63ff";

}

function visFunction7() {
    document.getElementById("openimg_").style.display = "none";
    document.getElementById("validatedimg_").style.display = "none";
    document.getElementById("rejectedimg_").style.display = "none";
    document.getElementById("closedimg_").style.display = "contents";


    document.getElementById("open_btn").style.backgroundColor = "#6c63ff";
    document.getElementById("validated_btn").style.backgroundColor = "#6c63ff";
    document.getElementById("rejected_btn").style.backgroundColor = "#6c63ff";
    document.getElementById("closed_btn").style.backgroundColor = "#F04705";

}


/*************************************Admin *******************/

function visFunction8() {
    document.getElementById("openimg1").style.display = "contents";
    document.getElementById("validatedimg1").style.display = "none";
    document.getElementById("rejectedimg1").style.display = "none";
    document.getElementById("closedimg1").style.display = "none";
   
   
    document.getElementById("openbtn1").style.backgroundColor = "#F04705";
    document.getElementById("validatedbtn1").style.backgroundColor = "#6c63ff";
    document.getElementById("rejectedbtn1").style.backgroundColor = "#6c63ff";
    document.getElementById("closedbtn1").style.backgroundColor = "#6c63ff"
}
function visFunction9() {
    document.getElementById("openimg1").style.display = "none";
    document.getElementById("validatedimg1").style.display = "contents";
    document.getElementById("rejectedimg1").style.display = "none";
    document.getElementById("closedimg1").style.display = "none";


    document.getElementById("openbtn1").style.backgroundColor = "#6c63ff";
    document.getElementById("validatedbtn1").style.backgroundColor = "#F04705";
    document.getElementById("rejectedbtn1").style.backgroundColor = "#6c63ff";
    document.getElementById("closedbtn1").style.backgroundColor = "#6c63ff";

}

function visFunction10() {
    document.getElementById("openimg1").style.display = "none";
    document.getElementById("validatedimg1").style.display = "none";
    document.getElementById("rejectedimg1").style.display = "contents";
    document.getElementById("closedimg1").style.display = "none";


    document.getElementById("openbtn1").style.backgroundColor = "#6c63ff";
    document.getElementById("validatedbtn1").style.backgroundColor = "#6c63ff";
    document.getElementById("rejectedbtn1").style.backgroundColor = "#F04705";
    document.getElementById("closedbtn1").style.backgroundColor = "#6c63ff";

}

function visFunction11() {
    document.getElementById("openimg1").style.display = "none";
    document.getElementById("validatedimg1").style.display = "none";
    document.getElementById("rejectedimg1").style.display = "none";
    document.getElementById("closedimg1").style.display = "contents";


    document.getElementById("openbtn1").style.backgroundColor = "#6c63ff";
    document.getElementById("validatedbtn1").style.backgroundColor = "#6c63ff";
    document.getElementById("rejectedbtn1").style.backgroundColor = "#6c63ff";
    document.getElementById("closedbtn1").style.backgroundColor = "#F04705";

}
//<-----------------------------Filter segment admin page script --------------------------->
