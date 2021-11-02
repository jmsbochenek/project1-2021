/*JavaScript added on this page */

  jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
  });

  function validationEvent() {
    var a = document.forms["form-one"]["first"].value;
    var b = document.forms["form-one"]["last"].value;
    var c = document.forms["form-one"]["email"].value;
    var d = document.forms["form-one"]["phone"].value;
    var e = document.forms["form-one"]["dob"].value;
    if ((a == "") || (b == "") || (c == "") || (d == "") || (e == "")){
      alert("All of the sections must be filled out.");
    }
    else{
      alert("Welcome to the gym.");
    }
  }


/*function confirmSignUp() {
  var answer = confirm("Are you ready to join the league?");
    if (answer == true) {
      alert("Welcome to the league!");
    }
    else{
      alert("We hope you join a team soon!");
    }
}*/