
$(window).on("load resize", function() {

let divs = ["#JSDIV","#SQLDIV","#CSSDIV","#HTMLDIV","#PHPDIV","#SwiftDIV","#PythonDIV","#JavaDIV"];

let pourcentages = ["70%","42%","50%","55%","45%","30%","63%","77%"];

let Gs = ["#JSG","#SQLG","#CSSG","#HTMLG","#PHPG","#SwiftG","#PythonG","#JavaG"];

let tabs = ["JS","SQL","CSS","HTML","PHP","Swift","Python","Java"];

let DOMS = [document.getElementById("PHP"),document.getElementById("Swift"),document.getElementById("Python"),
document.getElementById("JS"),document.getElementById("SQL"),document.getElementById("CSS"),document.getElementById("HTML"),
document.getElementById("Java")];



$(DOMS).on("click mouseover",function (event){
    for(let i = 0; i < divs.length; i++){
        if(tabs[i] == event.target.id){
            FadeOut(divs[i]);
            $(divs[i]).fadeIn("800");
            $(Gs[i]).css("height","0px");
            $(Gs[i]).animate({ height: pourcentages[i]},700);
            return;
        }
    }
});

function FadeOut(element){
    
    for (let i = 0; i < divs.length; i++){
        if (divs[i] != element) {
            $(divs[i]).hide();
        };
    };
};



$("body").click(function(event){
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

    });









