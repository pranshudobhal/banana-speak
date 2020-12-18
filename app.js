//Button click
var translateButton = document.getElementById("translate-button");

translateButton.addEventListener("click", translate);

//Read Input
var translateInput = document.getElementById("translate-input");

//Show Output
var translateOutput = document.getElementById("translate-output");

//Mock API
//var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

//API URL
var url = "https://api.funtranslations.com/translate/minion.json"

function translate(){
    var input = translateInput.value;
    fetch(constructURL(input))
    .then(response => response.json())
    .then(json => {
        translateOutput.innerText = json.contents.translated;
    })
    .catch(() => alert("Some error occured!"))
}

function constructURL(text){
    return url + "?" + "text=" + text;
}