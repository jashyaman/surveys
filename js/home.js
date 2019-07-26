$(document).ready(function(){
    $("#createquestion").click(function() {
            let url = "http://localhost:8091/html/question.html"
            $(location).attr('href',url);
    });
    $("#createsurvey").click(function() {
        let url = "http://localhost:8091/html/survey.html"
        $(location).attr('href',url);
    });
    $("#addemail").click(function(){
        let url = "http://localhost:8091/html/email.html"
        $(location).attr('href',url);
    });
    $("#logout").click(function(){
        let url = "http://localhost:8091/html/index.html"
        $(location).attr('href',url);
    })
    $("#createmlist").click(function(){
        let url = "http://localhost:8091/html/mlist.html"
        $(location).attr('href',url);
    });
    $("#releasesurvey").click(function(){
        let url = "http://localhost:8091/html/releaseSurvey.html"
        $(location).attr('href',url);
    });
    $("#viewstats").click(function(){
        let url = "http://localhost:8091/html/surveyStatistics.html"
        $(location).attr('href',url);
    });

});
setTimeout(function(){
    window.location.reload(1);
 }, 30000);