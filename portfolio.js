
$('#JS').hover(function(){
    FadeOut('#JSDIV');
    $("#JSDIV").fadeIn("800");
    $("#JSG").css("height","0px");
    $("#JSG").animate({ height: "65%"},700);
});

$('#SQL').hover(function(){
    FadeOut('#SQLDIV');
    $("#SQLDIV").fadeIn("800");
    $("#SQLG").css("height","0px");
    $("#SQLG").animate({ height: "40%"},700);
});

$('#CSS').hover(function(){
    FadeOut('#CSSDIV');
    $("#CSSDIV").fadeIn("800");
    $("#CSSG").css("height","0px");
    $("#CSSG").animate({ height: "60%"},700);
});

$('#HTML').hover(function(){
    FadeOut('#HTMLDIV');
    $("#HTMLDIV").fadeIn("800");
    $("#HTMLG").css("height","0px");
    $("#HTMLG").animate({ height: "68%"},700);
});

$('#PHP').hover(function(){
    FadeOut('#PHPDIV');
    $("#PHPDIV").fadeIn("800");
    $("#PHPG").css("height","0px");
    $("#PHPG").animate({ height: "45%"},700);
});

$('#Swift').hover(function(){
    FadeOut('#SwiftDIV');
    $("#SwiftDIV").fadeIn("800");
    $("#SwiftG").css("height","0px");
    $("#SwiftG").animate({ height: "35%"},700);
});

$('#Python').hover(function(){
    FadeOut('#PythonDIV');
    $("#PythonDIV").fadeIn("800");
    $("#PythonG").css("height","0px");
    $("#PythonG").animate({ height: "69%"},700);
});

$('#Java').hover(function(){
    FadeOut('#JavaDIV');
    $("#JavaDIV").fadeIn("800");
    $("#JavaG").css("height","0px");
    $("#JavaG").animate({ height: "77%"},700);
});

//let divs = ["#JSDIV","#SQLDIV","#CSSDIV","#HTMLDIV","#PHPDIV","#SwiftDIV","#PythonDIV","#JavaDIV"];
//let Gs = ["#JSG","#SQLG","#CSSG","#HTMLG","#PHPG","#SwiftG","#PythonG","#JavaG"];
//let tabs = ["#JS","#SQL","#CSS","#HTML","#PHP","#Swift","#Python","#Java"];
//
//$('#listOfSkills').find('li').hover(function(){
//    console.log(event.target.id);
//})
//
////$("body").hover(function (){
////    console.log(event.target.id);
//////    for(let i = 0; i < divs.length; i++){
//////        console.log(event.target.id,tabs[i]);
//////        if(tabs[i] == event.target.id){
//////            console.log(divs[i],Gs[i],tabs[i]);
//////            FadeOut(divs[i]);
//////            $(divs[i]).fadeIn("800");
//////            $(Gs[i]).css("height","0px");
//////            $(Gs[i]).animate({ height: "77%"},700);
//////            
//////        }
//////    }
////});

function FadeOut(element){
    
    for (let i = 0; i < divs.length; i++){
        if (divs[i] != element) {
            $(divs[i]).hide();
        };
    };
};



$("body").click(function(){
    if(event.target.id !== "JS" && event.target.id != "SQL" && event.target.id != "CSS" &&event.target.id != "HTML" && event.target.id != "PHP" 
    && event.target.id != "Swift" && event.target.id != "Python" && event.target.id != "Java"){
        
    $("#JSDIV").fadeOut("300");
    $("#SQLDIV").fadeOut("300");
    $("#CSSDIV").fadeOut("300");
    $("#HTMLDIV").fadeOut("300");
    $("#PHPDIV").fadeOut("300");
    $("#SwiftDIV").fadeOut("300");
    $("#PythonDIV").fadeOut("300");
    $("#JavaDIV").fadeOut("300");
    $("#javaDIV").fadeOut("300");
    }
    

});










