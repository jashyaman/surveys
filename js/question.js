$(document).ready(function(){
    console.log("refreshed" + new Date().getTime());
    let allGoodToSubmit = false;
    let answerObject = {};
    let questionExists = "";
    let divAddMore;
    let backUrl = "http://localhost:8091/html/home.html";
    $("#back").click(function() {
        $(location).attr('href',backUrl);
    });

    $("#addmore").click(function(){
        divAddMore = $("#answerchoices");
        let valueOfText = $('#ans').val();

        questionExists = $("#question").val(); 
        if(questionExists) {
        if(valueOfText) {
            let valueExists = false;
            divAddMore.children('label').each(function(){
                if(valueOfText === this.textContent) {
                    valueExists = true;
                }
            });
            if(valueExists) {
                alert("value exists");
            } else {
                divAddMore.append("<label>"+valueOfText+"</label><br>");
                $("#ans").val("");
                let answersSufficient = $("#answerchoices").children("label").length > 1;
                if(questionExists && answersSufficient) {
                    allGoodToSubmit = true;
                }
            }
        } else {
            alert("enter value in text box")
        }
    } else {
        alert("enter a question first");
    }
    });

    $("#submit").click(function() {
        if(allGoodToSubmit) {
            answerObject["question"] = $("#question").val();
            let answerList = [];
            $("#answerchoices").children("label").each(function(){
                answerList.push(this.textContent);
            });
            answerObject["answers"] = answerList;
            
            console.log(answerObject);
            
        } else {
            alert("Ensure question is entered and atleast two choices are input");
        }
    });
});
setTimeout(function(){
    window.location.reload(1);
 }, 30000);