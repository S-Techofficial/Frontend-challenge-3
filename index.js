
document.querySelector("button").addEventListener("click",validateEmail);




function validateEmail(){
    var mailFormat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var inputEmail=document.querySelector("input").value;
    if(inputEmail.match(mailFormat)){
        alert("Thankyou! We'll notify you soon.");
        document.querySelector(".warning").style.visibility="hidden";
        location.reload();
    }else{
        document.querySelector(".warning").style.visibility="visible";
        document.querySelector(".input").style.borderWidth="2px";
        document.querySelector(".input").style.borderColor="hsl(0, 93%, 68%)";
        document.querySelector(".warning-text").style.visibility="visible";
    }
}