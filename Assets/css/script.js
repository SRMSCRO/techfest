const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {
// 	container.classList.add("right-panel-active");
// });

// signInButton.addEventListener('click', () => {
// 	container.classList.remove("right-panel-active");
// });
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
// <-----------------------------ANALYTICS------------------------------->
function vis2Function() {
    document.getElementById("openimg2").style.display = "contents";
    document.getElementById("validatedimg2").style.display = "none";
    document.getElementById("rejectedimg2").style.display = "none";
    document.getElementById("closedimg2").style.display = "none";
   
   
    document.getElementById("openbtn2").style.backgroundColor = "#F04705";
    document.getElementById("validatedbtn2").style.backgroundColor = "#6c63ff";
    document.getElementById("rejectedbtn2").style.backgroundColor = "#6c63ff";
    document.getElementById("closedbtn2").style.backgroundColor = "#6c63ff";

}

function vis2Function1() {
    document.getElementById("openimg2").style.display = "none";
    document.getElementById("validatedimg2").style.display = "contents";
    document.getElementById("rejectedimg2").style.display = "none";
    document.getElementById("closedimg2").style.display = "none";


    document.getElementById("openbtn2").style.backgroundColor = "#6c63ff";
    document.getElementById("validatedbtn2").style.backgroundColor = "#F04705";
    document.getElementById("rejectedbtn2").style.backgroundColor = "#6c63ff";
    document.getElementById("closedbtn2").style.backgroundColor = "#6c63ff";

}

function vis2Function2() {
    document.getElementById("openimg2").style.display = "none";
    document.getElementById("validatedimg2").style.display = "none";
    document.getElementById("rejectedimg2").style.display = "contents";
    document.getElementById("closedimg2").style.display = "none";


    document.getElementById("openbtn2").style.backgroundColor = "#6c63ff";
    document.getElementById("validatedbtn2").style.backgroundColor = "#6c63ff";
    document.getElementById("rejectedbtn2").style.backgroundColor = "#F04705";
    document.getElementById("closedbtn2").style.backgroundColor = "#6c63ff";

}

function vis2Function3() {
    document.getElementById("openimg2").style.display = "none";
    document.getElementById("validatedimg2").style.display = "none";
    document.getElementById("rejectedimg2").style.display = "none";
    document.getElementById("closedimg2").style.display = "contents";


    document.getElementById("openbtn2").style.backgroundColor = "#6c63ff";
    document.getElementById("validatedbtn2").style.backgroundColor = "#6c63ff";
    document.getElementById("rejectedbtn2").style.backgroundColor = "#6c63ff";
    document.getElementById("closedbtn2").style.backgroundColor = "#F04705";

}
// <-----------------------------ANALYTICS END--------------------------->
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

function vis20Function() {
  document.getElementById("openimg20").style.display = "contents";
  document.getElementById("validatedimg20").style.display = "none";
  document.getElementById("rejectedimg20").style.display = "none";
 
 
  document.getElementById("openbtn20").style.backgroundColor = "#F04705";
  document.getElementById("validatedbtn20").style.backgroundColor = "#6c63ff";
  document.getElementById("rejectedbtn20").style.backgroundColor = "#6c63ff";

}

function vis20Function1() {
  document.getElementById("openimg20").style.display = "none";
  document.getElementById("validatedimg20").style.display = "contents";
  document.getElementById("rejectedimg20").style.display = "none";

  document.getElementById("openbtn20").style.backgroundColor = "#6c63ff";
  document.getElementById("validatedbtn20").style.backgroundColor = "#F04705";
  document.getElementById("rejectedbtn20").style.backgroundColor = "#6c63ff";

}

function vis20Function2() {
  document.getElementById("openimg20").style.display = "none";
  document.getElementById("validatedimg20").style.display = "none";
  document.getElementById("rejectedimg20").style.display = "contents";


  document.getElementById("openbtn20").style.backgroundColor = "#6c63ff";
  document.getElementById("validatedbtn20").style.backgroundColor = "#6c63ff";
  document.getElementById("rejectedbtn20").style.backgroundColor = "#F04705";
 

}
//<-----------------------------Filter segment admin page script --------------------------->
//<-----------------------------Modal script------------------------------------------------>
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("modal1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}



var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("modal2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}



var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn3 = document.getElementById("modal3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}


var modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
var btn4 = document.getElementById("modal4");

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
  modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}



var modal5 = document.getElementById("myModal5");

// Get the button that opens the modal
var btn5 = document.getElementById("modal5");

// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn5.onclick = function() {
  modal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
  modal5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}




var modal6 = document.getElementById("myModal6");

// Get the button that opens the modal
var btn6 = document.getElementById("modal6");

// Get the <span> element that closes the modal
var span6 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn6.onclick = function() {
  modal6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span6.onclick = function() {
  modal6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}



var modal7 = document.getElementById("myModal7");

// Get the button that opens the modal
var btn7 = document.getElementById("modal7");

// Get the <span> element that closes the modal
var span7 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn7.onclick = function() {
  modal7.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span7.onclick = function() {
  modal7.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
}













var modal_admin = document.getElementById("myModal_admin");

// Get the button that opens the modal
var btn_admin = document.getElementById("modal_admin");

// Get the <span> element that closes the modal
var span_admin = document.getElementsByClassName("close_admin")[0];

// When the user clicks on the button, open the modal
btn_admin.onclick = function() {
  modal_admin.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_admin.onclick = function() {
  modal_admin.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_admin) {
    modal_admin.style.display = "none";
  }
}