/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function() {
  $("#EPSY1,#EPSY2").hide();


    $("#y").click(function() {
       
      //  $("fieldset #EPSY1").show();
     //   $("fieldset #EPSY2").show();
       $(" #EPSY1").show();
       $("#EPSY2").show();
       // alert("hello  Yes");				   
    });

    $(" #n").click(function() {
        $("#EPSY2").show();
        $("#EPSY1").hide();

        // alert("hello  Yes");				   
    });

    $("#inn").focus(function() {
        $("#valert").html("maximum 3");
    });
  


});
