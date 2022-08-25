$(document).ready(function(){
  $(".dot").click(function(){
    $(".lorem").hide(8000);
    $(".lorem").show(5000);
  });
  $(".star").click(function(){
    $(".dolor").hide(4000);
    $(".dolor").show(3000);
  });
  });

  function formdata() {
    var formGroupExampleInput = document.forms ["popup"]["Name"];
    var formGroupExampleInput2 = document.forms ["popup"]["Email"];
    var formGroupExampleInput3 = document.forms ["popup"]["Subject"];
    var formGroupExampleInput4 = document.forms ["popup"]["Message"];
    if (formGroupExampleInput.value == "") {
      window.alert("Pleash enter your name.");
      formGroupExampleInput.focus();
      return false;
    }
    if (formGroupExampleInput2.value == "") {
      window.alert("Pleash enter your Email.");
      formGroupExampleInput2.focus();
      return false;
    }
    if (formGroupExampleInput3.value == "") {
      window.alert("Pleash enter your Subject.");
      formGroupExampleInput3.focus();
      return false;
    }
    if (formGroupExampleInput4.value == "") {
      window.alert("Pleash enter your Message.");
      formGroupExampleInput4.focus();
      return false;
    }
    return true;
  }
