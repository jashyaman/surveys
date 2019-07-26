$(document).ready(function(){
    let backUrl = "http://localhost:8091/html/home.html";
    $("#back").click(function() {
        $(location).attr('href',backUrl);
    });

    qAlist().forEach(function(value,index){
        let survey = "<input type=\"radio\" name=\"r"+"\" value=\""+value+"\">"+value+"<br>";
        $("#surveyList").append(survey); 
    });
    $("#go").click(function(){
        let surveySelected = false, surveyName = "";
        $("#surveyList").children("input").each(function(){
            if(this.checked) {
                surveySelected = true;
                surveyName = this.value;
            }
        });
        if(!surveySelected) {
            alert("Survey selection mandatory");
        } else {
            let response = generateStatistics(surveyName);
            $("#statistics").html(response);
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
 function generateStatistics(surveyName) {
    chartJsMagic(surveyName);
     return "<p>Survey results : " + surveyName+"</p><br><br>";
 };
 function getData(surveyName) {
    let surveyData = {};
    surveyData["career"] = {"totalRespondents":1126,"overall":{"option1":104,"option2":302,"option3":400,"option4":320},"breakdown":[{"mlist":"agegroup30to40","selections":{"option1":30,"option2":44,"option3":50,"option4":10}},{"mlist":"agegroup20to30","selections":{"option1":30,"option2":144,"option3":148,"option4":90}},{"mlist":"agegroup40to50","selections":{"option1":30,"option2":102,"option3":152,"option4":100}},{"mlist":"agegroup13to19","selections":{"option1":14,"option2":12,"option3":50,"option4":120}}]};
    surveyData["life"] = {"totalRespondents":9369,"overall":{"option1":1983,"option2":2971,"option3":2399,"option4":2016},"breakdown":[{"mlist":"agegroup30to40","selections":{"option1":330,"option2":867,"option3":657,"option4":846}},{"mlist":"agegroup20to30","selections":{"option1":72,"option2":411,"option3":973,"option4":611}},{"mlist":"agegroup40to50","selections":{"option1":820,"option2":947,"option3":683,"option4":412}},{"mlist":"agegroup13to19","selections":{"option1":761,"option2":746,"option3":86,"option4":147}}]};
    surveyData["marriage"] = {"totalRespondents":9369,"overall":{"option1":2197,"option2":8613,"option3":2024,"option4":2044},"breakdown":[{"mlist":"agegroup30to40","selections":{"option1":707,"option2":915,"option3":138,"option4":946}},{"mlist":"agegroup20to30","selections":{"option1":279,"option2":346,"option3":834,"option4":203}},{"mlist":"agegroup40to50","selections":{"option1":684,"option2":205,"option3":239,"option4":758}},{"mlist":"agegroup13to19","selections":{"option1":527,"option2":578,"option3":813,"option4":441}}]};
    surveyData["romance"] = {"totalRespondents":7556,"overall":{"option1":2516,"option2":1956,"option3":2500,"option4":584},"breakdown":[{"mlist":"agegroup30to40","selections":{"option1":965,"option2":352,"option3":855,"option4":191}},{"mlist":"agegroup20to30","selections":{"option1":394,"option2":761,"option3":502,"option4":167}},{"mlist":"agegroup40to50","selections":{"option1":623,"option2":689,"option3":669,"option4":132}},{"mlist":"agegroup13to19","selections":{"option1":534,"option2":154,"option3":474,"option4":94}}]};
    surveyData["movies"] = {"totalRespondents":6390,"overall":{"option1":971,"option2":1908,"option3":913,"option4":2598},"breakdown":[{"mlist":"agegroup30to40","selections":{"option1":391,"option2":410,"option3":6,"option4":859}},{"mlist":"agegroup20to30","selections":{"option1":175,"option2":17,"option3":4,"option4":398}},{"mlist":"agegroup40to50","selections":{"option1":227,"option2":953,"option3":140,"option4":403}},{"mlist":"agegroup13to19","selections":{"option1":178,"option2":528,"option3":763,"option4":938}}]};
    surveyData["TV shows"] = {"totalRespondents":9054,"overall":{"option1":2385,"option2":2268,"option3":2199,"option4":2202},"breakdown":[{"mlist":"agegroup30to40","selections":{"option1":394,"option2":233,"option3":757,"option4":478}},{"mlist":"agegroup20to30","selections":{"option1":335,"option2":515,"option3":376,"option4":124}},{"mlist":"agegroup40to50","selections":{"option1":904,"option2":961,"option3":870,"option4":819}},{"mlist":"agegroup13to19","selections":{"option1":752,"option2":559,"option3":196,"option4":781}}]};
    return surveyData[surveyName];
 }
 function chartJsMagic(surveyName) {
    let dataSet = getData(surveyName);
    let pieData = {
        datasets: [{
            data: [dataSet.overall.option1, dataSet.overall.option2, dataSet.overall.option3,dataSet.overall.option4],
            backgroundColor: [getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor()]
        }],
        labels: [
            'option1',
            'option2',
            'option3',
            'option4'
        ]
    };
    var ctx = document.getElementById('pie').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'pie',
        data : pieData,
        options : {}
    });
 }
 function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }