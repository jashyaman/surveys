$(document).ready(function(){
    let questionsList = setUpQAndA();
    let divForQuestions = $("#questions");
    let selectedQuestions = [];
    let surveyObject = {};
    let backUrl = "http://localhost:8091/html/home.html";

    questionsList.forEach(function(value,index){
        let ques = "<input type=\"checkbox\" name=\"q"+(index+1)+"\" value=\"q"+(index+1)+"\">"+value+"<br>";
        divForQuestions.append(ques); 
    });

    $("#submit").click(function(){
        let surveyTitle = $("#stitle").val();
        $("#questions").children("input").each(function(){
            if(this.checked) {
                selectedQuestions.push(this.value);
            }
        });
        if(surveyTitle) {
        if(selectedQuestions.length > 0) {
            surveyObject["title"] = surveyTitle;
            surveyObject["questions"] = selectedQuestions;
            console.log(surveyObject);
            
        } else {
            alert("Select atleast one question");
        }
    } else {
        alert("enter a name for the survey");
    }
        
    });

    $("#back").click(function() {
        $(location).attr('href',backUrl);
    });

});
setTimeout(function(){
    window.location.reload(1);
 }, 30000);
 function setUpQAndA(){
    let questionsList = [];
    questionsList.push("Where do you like to go when you eat out?");
    questionsList.push("Could you live without the internet?");
    questionsList.push("What's on your bucket list?");
    questionsList.push("What is your favorite hobby?");
    questionsList.push("Do you drink coffee or tea?");
    questionsList.push("If you were stranded on a deserted island and you could have only 1 item, what would it be?");
    return questionsList;
 };