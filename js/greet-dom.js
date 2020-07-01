var nameElement = document.querySelector('.theName');
const greetBtn  = document.querySelector('.greetbtn');
const resetBtn = document.querySelector('.resetbtn');
const lang = document.querySelector('.language'); /* radio elememnt*/
const greetCountElem = document.querySelector('.numberOfGreetings');
const message = document.querySelector('.printHere');


var data = localStorage.getItem('namesGreeted') ? JSON.parse(localStorage.getItem('namesGreeted')) : {};

var greete = greetings(data); 

function greetMe(){
   
    var userName = nameElement.value /* name of the value entered as string */
    var checkRadioButton = document.querySelector('input[name="language"]:checked');
    if(checkRadioButton){
        var language = checkRadioButton.value

        greete.greet(userName, language);
        greetCountElem.innerHTML = greete.greetingsCounter();
        
        message.innerHTML =  greete.greet(userName, language);
        localStorage.setItem("name",  JSON.stringify(greete.map()));
        
    } 
    
}

function resetMe(){
    
}
greetBtn.addEventListener('click', greetMe);
resetBtn.addEventListener('click', resetMe);