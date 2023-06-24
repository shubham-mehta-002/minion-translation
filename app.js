var input = document.querySelector(".input-div");
var button=document.querySelector(".btn")
var output = document.querySelector(".div2");

button.addEventListener("click",onclick)

var url="https://api.funtranslations.com/translate/minion.json";
function generateurl(text)
{
    return (url+"?text="+text);
}

function onclick()
{

    // console.log(input.value)
    fetch(generateurl(input.value))
    .then(response => response.json())
    .then(json => {
        console.log(json)
        var translatedtext = json.contents.translated;
        output.innerText = translatedtext;
    })


}





