$(document).ready(function(){
    let backUrl = "http://localhost:8091/html/home.html";
    $("#back").click(function() {
        $(location).attr('href',backUrl);
    });
    $("#addmore").click(function() {
        let email = $("#email").val();
        let emailAlreadyExists = false;
        if(email) {
            $("#emails").children("label").each(function(){
                if(this.textContent == email) {
                    emailAlreadyExists = true;
                }
            });
            if(emailAlreadyExists) {
                alert("Email already exists in list");
                $("#email").val("");
            } else {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(re.test(String(email).toLowerCase())) {
                    $("#emails").append("<label>"+email+"</label><br>");
                } else {
                    alert("Enter a valid email")
                }
                $("#email").val("");
            }
        } else {
            alert("Enter email address");
        }
    });
    $("#submit").click(function(){
        let emailsToSave = $("#emails").children("label");
        if(emailsToSave.length > 1) {
            let emailObject = {};
            let emailList = [];
            emailsToSave.each(function() {
                emailList.push(this.textContent);
            });
            emailObject["emails"] = emailList;
            console.log(emailObject);
            
        } else {
            alert("Insufficient count of emails entered to save")
        }

    });
});
setTimeout(function(){
    window.location.reload(1);
 }, 30000);