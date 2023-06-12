function buttonclicked(){
    var test=document.getElementById("username").value;
    if(test==""){
        document.getElementById("username").style.border="3px solid red";
        document.getElementById("username").placeholder="Please enter valid username";
    }

    var test2=document.getElementById("password").value;
    if(test2==""){
        document.getElementById("password").style.border="3px solid red";
        document.getElementById("password").placeholder="Please enter valid password";
    }

}

function signup(){

    var test3=document.getElementById("name").value;
    if(test3==""){
        document.getElementById("name").style.border="3px solid red";
        document.getElementById("name").placeholder="Please enter valid name";

    }

    var test4=document.getElementById("email").value;
    if(test4==""){
        document.getElementById("email").style.border="3px solid red";
        document.getElementById("email").placeholder="Please enter valid email address";
    }

    var test5=document.getElementById("password").value;
    if(test5==""){
        document.getElementById("password").style.border="3px solid red";
        document.getElementById("password").placeholder="Please enter valid passowrd";
    }

    var test4=document.getElementById("confirm-password").value;
    if(test4==""){
        document.getElementById("confirm-password").style.border="3px solid red";
        document.getElementById("confirm-password").placeholder="Please re-enter password";
    }
}