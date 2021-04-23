var btnTranslate = document.querySelector("#btn-transalte");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pirate.json"

function getTranslationURL(Text) {

    return severURL + "?" + "text=" + Text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server!try again after sometime")
}

function clickHandler() {
    var inputText = textInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json =>{
             var translatedText = json.contents.translated;
             outputDiv.innerText = translatedText;
            })

        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)







