const colorList = [
    "Black",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Crimson",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "ForestGreen",
    "Fuchsia",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "HotPink",
    "IndianRed",
    "Indigo",
    "LightCoral",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LimeGreen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "Navy",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleVioletRed",
    "Peru",
    "Pink",
    "Plum",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "SteelBlue",
    "Tan",
    "Teal",
    "Tomato",
    "Turquoise",
    "Violet",
    "YellowGreen",
    ];

const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Ecuador",
  "Egypt",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Samoa",
  "Satellite",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Uganda",
  "Ukraine",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
    ];

/*
  On va utiliser deux tableaux contenant le nom des pays : un avec tout les noms et un où l'on a enlevé le pays que l'on doit trouver.
  On va pouvoir tirer aléatoirement les nom de pays qu'on va placer dans un tableau, puis on va choisir un indice au hasard dans
  ce tableau pour y placer le pays à trouver. Ainsi, celui-ci ne sera présent qu'une seule fois dans le tableau.
*/

  
var countryListWithoutCountryToFind;
var numberWords = 100;
var buttonCountryList = [];
var countryToFind;
var countryIndex;
var keyCountryToFind;
var button;
var buttonCountry;
var countRound = 1;
var tabTime = [];
var tabCouleur = [];

//countdown
//Define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;
 
//Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
 
//Define var to hold setInterval() function
let interval = null;

document.getElementById("startStop").onmouseover = function() 
{
    let randomColor = Math.floor((Math.random() * colorList.length));
    this.style.backgroundColor = colorList[randomColor];
    this.style.color = "white";
}
document.getElementById("startStop").onmouseout = function() 
{
    this.style.backgroundColor = "white";
    this.style.color = "black";
}
 
//Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch(){
    seconds++;
 
    //Logic to determine when to increment next value
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
    }
 
    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }
 
    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }
 
    //Display updated time values to user
    document.getElementById("display").innerHTML = displayMinutes + ":" + displaySeconds;
}

function start() {
    if (document.getElementById("startStop").innerHTML == "RESET") {
        reset();
    }
    interval = window.setInterval(stopWatch, 1000);
    document.getElementById("startStop").innerHTML = "RESET";
    startGame();
}

function stop() {
    window.clearInterval(interval);
    document.getElementById("startStop").innerHTML = "START";
    reset();
}
 
//Function to reset the stopwatch
function reset(){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    document.getElementById("display").innerHTML = "00:00";
}

function win() {
    window.scrollTo(0, 0);
    document.getElementById('instruction').innerHTML = 'Well done ! Click on the "next" button to continue.';    
    countRound++;
    tabTime.push(seconds+60*minutes);
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }
    stop();
    
    if (countRound < 4) {
        document.getElementById("startStop").innerHTML = "NEXT";
    }
    else {
        document.getElementById("startStop").parentNode.removeChild(document.getElementById("startStop"));
        let mean = tabTime.reduce((a, b) => a + b, 0)/3;
        mean = mean.toFixed(2);
        document.getElementById('instruction').innerHTML = ""
        for (let i = 1; i <= 3; i++) {
            document.getElementById('instruction').innerHTML += "<b>Temps " + i + " : </b>" + tabTime[i-1] + "s ";
        }
        document.getElementById('instruction').innerHTML += "<b>Temps moyen : </b>" + mean + "s</br>";
        for (let i = 1; i <= 3; i++) {
            document.getElementById('instruction').innerHTML += "<b>Couleur " + i + " : </b><span style='color: " + tabCouleur[i-1] + ";'>" + tabCouleur[i-1] + "s </span>";
        }
        reset();
    }
}

function startGame() {
    buttonCountryList = []; // réinitialisation de la liste des boutons pays
    countryToFind = countryList[Math.floor(Math.random()*countryList.length)];  // le pays à trouver dans la liste

    countryListWithoutCountryToFind = countryList;  // initialisation de countryListWithoutCountryToFind[]
    countryIndex = countryList.indexOf(countryToFind);    // construction de countryListWithoutCountryToFind[]
    countryListWithoutCountryToFind.splice(countryIndex, 1);

    document.getElementById('instruction').innerHTML = "Country to find : " + countryToFind;    // affichage pays à trouver

    for (let i = 0; i < numberWords; i++) {   // génération des pays
        buttonCountryList.push(countryListWithoutCountryToFind[Math.floor(Math.random()*countryListWithoutCountryToFind.length)]);    // random country
    }

    keyCountryToFind = Math.floor(Math.random()*buttonCountryList.length);
    //var classCountryToFind = ".output" + keyCountryToFind;
    buttonCountryList[keyCountryToFind] = countryToFind;

    button = document.getElementById('output');
    button.innerText = "";

    for (let i = 0; i < numberWords; i++) {
        let nameOutput = ".output" + i;    // nom du button
        if (i == keyCountryToFind) {
            button.innerHTML += '<button onclick="win();" class="country output' + i + '"></button>&emsp;';    // nouveau <button>
        }
        else {
            button.innerHTML += '<button class="country output' + i + '"></button>&emsp;';    // nouveau <button>
        }
        buttonCountry = document.querySelector(nameOutput);    // on récupère le <button> qui vient d'être créé
        buttonCountry.innerText = " " + buttonCountryList[i];    // on affiche le pays

        let randomColor = Math.floor((Math.random() * colorList.length));     // random color 
        buttonCountry.style.color = colorList[randomColor];     // on change la couleur d'affichage du <button>

        if (i == keyCountryToFind) {
            tabCouleur.push(colorList[randomColor]);
        }
    }
}
