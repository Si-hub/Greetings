var nameElement = document.querySelector('.theName');
const greetBtn  = document.querySelector('.greetbtn');
const resetBtn = document.querySelector('.resetbtn');
const lang = document.querySelector('.language'); /* radio elememnt*/
const greetCountElem = document.querySelector('.numberOfGreetings');
const message = document.querySelector('.printHere');



function greetMe(){
   
    var checkRadioButton = document.querySelector('input[name="language"]:checked');
    var language = checkRadioButton.value;
    var userName = nameElement.value /* name of the value entered as string */

    var namesGreeted = [];

    namesGreeted.push(userName);
    localStorage.setItem("name",JSON.stringify(namesGreeted))

    if (namesGreeted[userName] === undefined){
        namesGreeted++;
        //add an entry for the user that was greeted in the Object Map
        namesGreeted[userName] = 0;
        localStorage.getItem("name");
        //update the DOM to display the counter
        //greetingsElem.innerHTML = greetingsCounter;
       
    }

    if (language && userName === "English"){
        return "Hello"
    }
    else if (language && userName === "Isixhosa"){
        return "Molo"
    }
    else if (language && userName === "Afrikaans"){
        return "Hallo!"
    }
    message.innerHTML = language + namesGreeted;
    //console.log(namesGreeted);
}


greetBtn.addEventListener('click', greetMe);


function resetMe(){


}
resetBtn.addEventListener('click', resetMe);