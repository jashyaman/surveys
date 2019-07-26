$(document).ready(function(){
    let backUrl = "http://localhost:8091/html/home.html";
    $("#back").click(function() {
        $(location).attr('href',backUrl);
    });
    qAlist().forEach(function(value,index){
        let survey = "<input type=\"radio\" name=\"qa"+"\" value=\""+value+"\">"+value+"<br>";
        $("#survey").append(survey); 
    });
    emailList().forEach(function(value,index){
        let emails = "<input type=\"radio\" name=\"el"+"\" value=\""+value+"\">"+value+"<br>";
        $("#maillist").append(emails);
    });
    $("#submit").click(function(){
        let surveySelected = false, mListSelected = false;
        let surveyName = "", mListName = "";
        $("#survey").children("input").each(function(){
            if(this.checked) {
                surveySelected = true;
                surveyName = this.value;
            }
        });
        $("#maillist").children("input").each(function(){
            if(this.checked) {
                mListSelected = true;
                mListName = this.value;
            }
        });
        if(!surveySelected) {
            alert("Survey selection mandatory");
        }
        if(!mListSelected) {
            alert("Mailing list selection mandatory");
        }
        if(surveySelected && mListSelected) {
            let releaseSurveyObject = {};
            releaseSurveyObject["survey"] = surveyName;
            releaseSurveyObject["mlist"] = mListName;
            console.log(releaseSurveyObject);
            
        }
    });

});
setTimeout(function(){
    window.location.reload(1);
 }, 30000);
 function qAlist(){
    let qSetList = [];
    qSetList.push("career");
    qSetList.push("life");
    qSetList.push("marriage");
    qSetList.push("romance");
    qSetList.push("movies");
    qSetList.push("TV shows");
    return qSetList;
 };
 function emailList(){
    let mailingList = [];
    mailingList.push("agegroup20to30");
    mailingList.push("agegroup30to40");
    mailingList.push("agegroup40to50");
    mailingList.push("agegroup13to19");
    mailingList.push("random");
    mailingList.push("all");
    return mailingList;
 };