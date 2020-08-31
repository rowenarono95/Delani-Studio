$(document).ready(function () {
    $(".icon").click(function () {
        $(".design").toggle();
        $(".design1").toggle();
    });
});

$(document).ready(function () {
    $(".icon1").click(function () {
        $(".develop").toggle();
        $(".develop1").toggle();
    });
});

$(document).ready(function () {
    $(".icon2").click(function () {
        $(".management").toggle();
        $(".management1").toggle();
    });

    $("#image1").mouseover(function () {
        $("#studio").show();
    }).mouseout(function () {
        $("#studio").hide();
    });

    $("#image2").mouseover(function () {
        $("#ontario").show();
    }).mouseout(function () {
        $("#ontario").hide();
    });

    $("#image3").mouseover(function () {
        $("#delani").show();
    }).mouseout(function () {
        $("#delani").hide();
    });

    $("#image4").mouseover(function () {
        $("#jim-curry").show();
    }).mouseout(function () {
        $("#jim-curry").hide();
    });

    $("#image5").mouseover(function () {
        $("#profile").show();
    }).mouseout(function () {
        $("#profile").hide();
    });

    $("#image6").mouseover(function () {
        $("#timer").show();
    }).mouseout(function () {
        $("#timer").hide();
    });

    $("#image7").mouseover(function () {
        $("#burned").show();
    }).mouseout(function () {
        $("#burned").hide();
    });

    $("#image8").mouseover(function () {
        $("#giraffe").show();
    }).mouseout(function () {
        $("#giraffe").hide();
    });
});



// function myFunction(){
//     var name =document.getElementById("name").value;
//     var email =document.getElementById("email").value;
//     var text =document.getElementById("textArea").value;
//     if(name==""|| email==""||textArea==""){
//       alert("enter your name, email and your message")
//     }
//     else alert(name+" Thank you for reaching out to us")
//   }