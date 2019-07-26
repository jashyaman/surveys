$(document).ready(function(){
    let backUrl = "http://localhost:8091/html/home.html";
    $("#back").click(function() {
        $(location).attr('href',backUrl);
    });
    let emails = setUpEmailList();
    let emailDiv = $("#emaillist");
    let initialSubmit = true;
    let emailsToSave = [];
    emails.forEach(function(value,index){
        let email = "<input type=\"checkbox\" name=\"e"+(index+1)+"\" value=\""+value+"\">"+value+"<br>";
        emailDiv.append(email);
    });

    $("#submit").click(function() {
        if(initialSubmit) {
            let readyToSave = false;
            emailsToSave = [];
            emailDiv.children("input").each(function(){
                if(this.checked) {
                    readyToSave = true;
                    emailsToSave.push(this.value);
                }
            });
            if(readyToSave) {
                let mListObject = {};
                mListObject["emails"] = emailsToSave;
                $("#mlistname").append(" <label>Enter a name for the mailing list: <input type=\"text\" id=\"mlistnm\"></label>");
                $("#submit").html("Save");
            } else {
                alert("select atleast one email to save");
            }
            initialSubmit = false;
        } else {
            let mlistName = $("#mlistnm")[0].value;
            if(mlistName) {
                let mListObj = {};
                mListObj["name"] = mlistName;
                mListObj["emails"] =  emailsToSave;
                console.log(mListObj);
            } else {
                alert("Enter a name for the mailing list");
            }
        }
    });

});
setTimeout(function(){
    window.location.reload(1);
 }, 30000);
 function setUpEmailList(){
    let emailList = [];
    emailList.push("mail2coolguypraveen@gmail.com");
    emailList.push("navrajalaugh@gmail.com");
    emailList.push("janesmithchicago@esp.com");
    emailList.push("ironman@timgarage.com");
    emailList.push("jamesbond@xyzdetectiveagency.com");
    return emailList;
 };