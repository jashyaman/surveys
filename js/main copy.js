$(document).ready(function(){
    let backUrl = "http://localhost:8091/html/index.html";
    $("#back").click(function() {
        $(location).attr('href',backUrl);
    });

});
setTimeout(function(){
    window.location.reload(1);
 }, 30000);