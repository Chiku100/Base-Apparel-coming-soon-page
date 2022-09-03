function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        alert("successfully submitted"); 
       
        return true;
    }
    else {

        document.querySelector(".error").classList.toggle("error");
        document.getElementById("submit").disabled = true;
        document.querySelector("#email").focus();
        setTimeout(() => {
            document.location.reload();
        }, 1000);
        return false;

    }
}
