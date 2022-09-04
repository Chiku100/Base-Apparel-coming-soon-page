function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        alert("successfully submitted");
        document.querySelector(".val").classList.add("error");
        document.querySelector(".errimg").classList.add("error"); 
        document.getElementById("submit").disabled = false;
        return true;
    }
    else {

        document.querySelector(".val").classList.remove("error");
        document.querySelector(".errimg").classList.remove("error");
        
        document.getElementById("submit").disabled = true
        setTimeout(() => {
            document.location.reload();
        }, 2000);
        return false;

    }
}
