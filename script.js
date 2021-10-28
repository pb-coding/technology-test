//Texte
var text1 = "Herzlich Wilkommen! \n" +
    "In der nächsten Aufgabe wird Ihnen eine Anzahl von Wörtern oder Bildern (\"Items\") gezeigt, die Sie in Gruppen zuordnen sollen. Es ist wichtig, dass Sie dies so schnell und fehlerfrei wie möglich tun. Wenn Sie zu langsam vorgehen, oder zu viele Fehler machen, wird ihr Ergebnis nicht feststellbar sein. Dieser Teil der Studie wird ungefähr fünf Minuten dauern. Es folgt nun die Auflistung der Kategorien und der einzelnen Items, die zu den jeweiligen Kategorien gehören.";

var text2 = "Denken Sie daran\n" +
    "Legen Sie Ihre Zeigefinger auf die Tasten \"e\" und \"i\", um schnell reagieren zu können.\n" +
    "Zwei Hinweisfelder oben werden Ihnen zeigen, welche Wörter oder Bilder zu welcher Taste gehören.\n" +
    "Jedes Wort oder Bild hat eine korrekte Zuordnung. Meist sind diese sehr leicht.\n" +
    "Der Test wird kein Ergebnis rückmelden, wenn Sie zu langsam sind - bemühen Sie sich bitte, so schnell wie möglich zu reagieren.\n" +
    "Rechnen Sie damit, dass Sie ein paar Fehler machen werden, weil Sie zu schnell reagieren. Das ist kein Problem.\n" +
    "Um ein genaues Ergebnis zu erhalten, meiden Sie Ablenkungen und bleiben Sie konzentriert."

function start() {
    document.getElementById("left_up").innerText = "";
    document.getElementById("left_sep").innerText = "";
    document.getElementById("left_down").innerText = "";
    document.getElementById("right_up").innerText = "";
    document.getElementById("right_sep").innerText = "";
    document.getElementById("right_down").innerText = "";
    document.getElementById("middle").innerText = "";
    document.getElementById("output").innerText = text1;

    document.addEventListener('keydown', function space1(event) {

        if (event.keyCode === 32) {
            document.getElementById("output").innerText = text2;

            document.removeEventListener('keydown', space1, false);
            phase1();
        }
    });
}



// document.getElementById("left_up").innerText = "Technologie";
// document.getElementById("left_sep").innerText = "oder";
// document.getElementById("left_down").innerText = "Gut";
// document.getElementById("right_up").innerText = "Nicht Technologie";
// document.getElementById("right_sep").innerText = "oder";
// document.getElementById("right_down").innerText = "Schlecht";
// document.getElementById("middle").innerText = "Google";
// document.getElementById("output").innerText = "";


// document.getElementById("left_up").innerText = "";
// document.getElementById("left_sep").innerText = "";
// document.getElementById("left_down").innerText = "";
// document.getElementById("right_up").innerText = "";
// document.getElementById("right_sep").innerText = "";
// document.getElementById("right_down").innerText = "";
// document.getElementById("middle").innerText = "";
// document.getElementById("output").innerText = "";







function phase1() {
    document.addEventListener ('keydown', function space2 (event) {
        if (event.keyCode === 32) {


            document.removeEventListener('keydown', space2, false);
            phase2();
        }
    });
}

function phase2() {
    document.addEventListener('keydown', function space3(event) {

        if (event.keyCode === 32) {
            document.getElementById("left_up").innerText = "digital / virtuell";
            document.getElementById("left_sep").innerText = "oder";
            document.getElementById("left_down").innerText = "Gut";
            document.getElementById("right_up").innerText = "analog / real";
            document.getElementById("right_sep").innerText = "oder";
            document.getElementById("right_down").innerText = "Schlecht";
            document.getElementById("middle").innerText = "E-Mail";
            document.getElementById("output").innerText = "";

            document.removeEventListener('keydown', space3, false);
        }
    });
}





