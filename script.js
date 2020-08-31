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
});

function myFunction(){
    var name =document.getElementById("name").value;
    var email =document.getElementById("email").value;
    var text =document.getElementById("textArea").value;
    if(name==""|| email==""||textArea==""){
      alert("enter your name, email and your message")
    }
    else alert(name+" Thank you for reaching out to us")
  }