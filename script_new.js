//Tasten
var space = 32;
//
var middle_paddingtop1 = "260px";
var middle_paddingtop3 = "200px";
var middle_paddingtop_text = "190px";
var middle_paddingtop_table = "100px";
//Texte
var text_intro = "Herzlich Willkommen zum Technologie Assoziationstest! \n" +
    "In der nächsten Aufgabe wird Ihnen eine Anzahl von Wörtern (\"Items\") gezeigt, die Sie jeweils einer Kategorie zuordnen sollen. Es ist wichtig, dass Sie dies so schnell und fehlerfrei wie möglich tun. Wenn Sie zu langsam vorgehen, oder zu viele Fehler machen, wird ihr Ergebnis nicht feststellbar sein. Dieser Teil der Studie wird ungefähr fünf Minuten dauern. Es folgt nun eine Tabelle, die die Kategorien und die zugehörigen Items auflistet.";
var text_tabelle = "<table><tr><td>dies ist die zelle der tabelle</td></td></table>";
var text1 = "Legen Sie Ihre Zeigefinger auf die Tasten \"e\" und \"i\", um schnell reagieren zu können. " +
    "Oben links und oben rechts werden gleich zwei Kategorien angezeigt und in der Mitte erscheinen dann der Reihe nach Begriffe, die diesen zugeordnet werden müssen. Drücken Sie die Taste \"e\" um den Begriff der linken, und die Taste \"i\" um den Begriff der rechten Kategorie zuzuordnen. " +
    "Jedes Wort hat eine korrekte Zuordnung. Meist sind diese sehr leicht.\n" +
    "Der Test wird kein Ergebnis rückmelden, wenn Sie zu langsam sind - bemühen Sie sich bitte, so schnell wie möglich zu reagieren. " +
    "Rechnen Sie damit, dass Sie ein paar Fehler machen werden, weil Sie zu schnell reagieren. Das ist kein Problem. " +
    "Um ein genaues Ergebnis zu erhalten, meiden Sie Ablenkungen und bleiben Sie konzentriert.\n \n" +
    "Gleich geht es los...";
var text2 = "Beachten Sie die veränderten Kategorien in den beiden oberen Ecken. Die zuzuordnenden Items (Wörter) haben sich ebenfalls geändert.\n" +
    "Die Regeln bleiben allerdings die gleichen.\n \n" +
    "Wenn das Item zur linken Kategorie gehört, drücken sie die Taste \"e\", wenn es zur rechten Kategorie gehört, drücken Sie die taste \"i\". Jedes Item gehört zu einer Kategorie. Es erscheint ein \"Falsch\", wenn Sie einen Fehler machen. Korrigieren Sie den Fehler, indem sie die andere Taste drücken. REAGIEREN SIE SO SCHNELL SIE KÖNNEN.";
var text3 = "Wie Sie oben sehen, erscheinen die 4 Kategorien, die Sie zuerst getrennt gesehen haben, nun zusammen. Beachten Sie, dass jedes Item (Wort) nur in eine Gruppe gehört.\n " +
    "Die grünen und weißen Farben der Items können dabei helfen die richtige Kategorie zu finden. Drücken Sie die Tasten \"e\" oder \"i\" um die Items in den vier Gruppen links und rechts zuzuordnen. Korrigieren Sie Fehler, indem Sie nach einem Fehler nochmal die Taste drücken, die den Begriff in die richtige Kategorie zuordnet.";
//Wörter
var text4 = "Beachten Sie, dass es nun nur zwei Kategorien gibt und dass diese die Seiten getauscht haben. Die Kategorie, die vorher links war, ist nun rechts, die rechte Kategorie ist nun links. Üben Sie zunächst die neue Anordnung.\n" +
    "Drücken Sie die Tasten \"e\" oder \"i\" um die Items links oder rechts zuzuordnen und korrigieren Sie Fehler, indem Sie die jeweils andere Taste drücken.";
var text5 = "Beachten Sie, dass nun 4 Kategorien wieder zusammen in einer Kombination stehen. Beachten Sie, dass jedes Item nur zu einer Gruppe gehört.\n" +
    "Die grünen und weißen Felder und Items können dabei helfen, die richtige Kategorie zu finden. Drücken Sie die Tasten \"e\" oder \"i\", um die Items (Wörter) einer der 4 Gruppen links und rechts zuzuordnen. Korrigieren Sie Fehler, indem Sie die jeweils andere Taste drücken.";
var text6 = "Danke für Ihre Teilnahme! Bitte drücken Sie die LEERTASTE, um fortzufahren.";
var text_x_result = "Ihr Ergebnis:\n\n" +
    "Stark überdurchschnittlich!\n\n" +
    "Probanden im ähnlichen Alter, die ein ähnliches Ergebnis wie Sie erzielt haben, sind überdurchschnittlich erfolgreich im Einsatz digitaler Technologien.\n\n" +
    "Außerdem lassen Ergebnisse auf diesem Niveau vermuten, dass Teilnehmer besondere Ressourcen besitzen, emotionale Erregung und Anspannung während der Testdurchführung für die Bewältigung schwieriger Aufgaben nutzen zu können.";
var text_end = "Danke für die Teilnahme am Test. Bitte merken Sie sich diesen Testcode: 9191. Sie dürfen das Fenster nun schließen.";
var digital_word1 = "E-Mail";
var digital_word2 = "googeln";
var digital_word3 = "Computer";
var digital_word4 = "twittern";
var digital_word5 = "Smartphone";
var digital_word6 = "IP-Adresse";
var digital_word7 = "WLAN";
var digital_word8 = "programmieren";
var digital_word9 = "Internet";
var digital_word10 = "Software";
var analog_word1 = "Papier";
var analog_word2 = "bekleben";
var analog_word3 = "Kugelschreiber";
var analog_word4 = "Brief";
var analog_word5 = "Füller";
var analog_word6 = "Heft";
var analog_word7 = "Notizblock";
var analog_word8 = "radieren";
var analog_word9 = "Schere";
var analog_word10 = "Pinnwand";
var good_word1 = "Glücklich";
var good_word2 = "Frieden";
var good_word3 = "Vergnügen";
var good_word4 = "Prachtvoll";
var good_word5 = "Liebe";
var good_word6 = "Lachen";
var good_word7 = "Freude";
var good_word8 = "Wundervoll";
var bad_word1 = "Qual";
var bad_word2 = "Verletzt";
var bad_word3 = "Misserfolg";
var bad_word4 = "Böse";
var bad_word5 = "Übel";
var bad_word6 = "Schrecklich";
var bad_word7 = "Grausam";
var bad_word8 = "Scheußlich";
//Kategorien
var digital_cat = "digital / virtuell";
var analog_cat = "analog / real";
var seperator = "oder";
var good = "gut";
var bad = "schlecht";
var keyinst_ei = "Taste \"e\" für links - Taste \"i\" für rechts";
var keyinst_space_cont = "Bitte die LEERTASTE drücken um fortzufahren";
var keyinst_space_start = "Bitte die LEERTASTE drücken um zu starten";
//Colors
var gb_color = "lightgreen";
var da_color = "white";
//Elemente
var left_up = document.getElementById("left_up");
var left_sep = document.getElementById("left_sep");
var left_down = document.getElementById("left_down");
var right_up = document.getElementById("right_up");
var right_sep = document.getElementById("right_sep");
var right_down = document.getElementById("right_down");
var middle = document.getElementById("middle");
var output = document.getElementById("output");
var key_inst = document.getElementById("key_instructions");
var table_div = document.getElementById("table_div");
var key_inst = document.getElementById("key_instructions");
var AnswerKeys;
(function (AnswerKeys) {
    AnswerKeys[AnswerKeys["e"] = 69] = "e";
    AnswerKeys[AnswerKeys["i"] = 73] = "i";
})(AnswerKeys || (AnswerKeys = {}));
var tasksStadium1 = [
    [digital_word1, AnswerKeys.e, da_color],
    [analog_word1, AnswerKeys.i, da_color],
    [digital_word2, AnswerKeys.e, da_color],
    [digital_word3, AnswerKeys.e, da_color],
    [digital_word4, AnswerKeys.e, da_color],
    [analog_word2, AnswerKeys.i, da_color],
    [analog_word3, AnswerKeys.i, da_color],
    [digital_word5, AnswerKeys.e, da_color],
    [analog_word4, AnswerKeys.i, da_color],
    [analog_word5, AnswerKeys.i, da_color],
    [digital_word6, AnswerKeys.e, da_color],
    [analog_word6, AnswerKeys.i, da_color],
    [digital_word7, AnswerKeys.e, da_color],
    [digital_word8, AnswerKeys.e, da_color],
    [analog_word7, AnswerKeys.i, da_color],
    [digital_word9, AnswerKeys.e, da_color],
    [analog_word8, AnswerKeys.i, da_color],
    [analog_word9, AnswerKeys.i, da_color],
    [digital_word10, AnswerKeys.e, da_color],
    [analog_word10, AnswerKeys.i, da_color]
];
var tasksStadium2 = [
    [good_word1, AnswerKeys.e, gb_color],
    [good_word2, AnswerKeys.e, gb_color],
    [bad_word1, AnswerKeys.i, gb_color],
    [good_word3, AnswerKeys.e, gb_color],
    [bad_word2, AnswerKeys.i, gb_color],
    [bad_word3, AnswerKeys.i, gb_color],
    [bad_word4, AnswerKeys.i, gb_color],
    [good_word4, AnswerKeys.e, gb_color],
    [bad_word5, AnswerKeys.i, gb_color],
    [good_word5, AnswerKeys.e, gb_color],
    [bad_word6, AnswerKeys.i, gb_color],
    [bad_word7, AnswerKeys.i, gb_color],
    [good_word6, AnswerKeys.e, gb_color],
    [good_word7, AnswerKeys.e, gb_color],
    [bad_word8, AnswerKeys.i, gb_color],
    [good_word8, AnswerKeys.e, gb_color]
];
var tasksStadium3 = [
    [good_word5, AnswerKeys.e, gb_color],
    [analog_word1, AnswerKeys.i, da_color],
    [bad_word3, AnswerKeys.i, gb_color],
    [analog_word6, AnswerKeys.i, da_color],
    [analog_word9, AnswerKeys.i, da_color],
    [digital_word9, AnswerKeys.e, da_color],
    [bad_word1, AnswerKeys.i, gb_color],
    [analog_word8, AnswerKeys.i, da_color],
    [analog_word4, AnswerKeys.i, da_color],
    [digital_word5, AnswerKeys.e, da_color],
    [good_word6, AnswerKeys.e, gb_color],
    [analog_word3, AnswerKeys.i, da_color],
    [analog_word10, AnswerKeys.i, da_color],
    [analog_word2, AnswerKeys.i, da_color],
    [bad_word7, AnswerKeys.i, gb_color],
    [digital_word4, AnswerKeys.e, da_color],
    [good_word3, AnswerKeys.e, gb_color],
    [good_word4, AnswerKeys.e, gb_color],
    [good_word1, AnswerKeys.e, gb_color],
    [digital_word8, AnswerKeys.e, da_color],
    [digital_word10, AnswerKeys.e, da_color],
    [digital_word7, AnswerKeys.e, da_color],
    [analog_word5, AnswerKeys.i, da_color],
    [bad_word5, AnswerKeys.i, gb_color],
    [bad_word6, AnswerKeys.i, gb_color],
    [digital_word2, AnswerKeys.e, da_color],
    [digital_word6, AnswerKeys.e, da_color],
    [good_word7, AnswerKeys.e, gb_color],
    [bad_word2, AnswerKeys.i, gb_color],
    [bad_word8, AnswerKeys.i, gb_color],
    [analog_word7, AnswerKeys.i, da_color],
    [digital_word3, AnswerKeys.e, da_color],
    [good_word2, AnswerKeys.e, gb_color],
    [bad_word4, AnswerKeys.i, gb_color],
    [good_word8, AnswerKeys.e, gb_color],
    [digital_word1, AnswerKeys.e, da_color]
];
var tasksStadium4 = [
    [analog_word2, AnswerKeys.e, da_color],
    [analog_word9, AnswerKeys.e, da_color],
    [analog_word10, AnswerKeys.e, da_color],
    [digital_word7, AnswerKeys.i, da_color],
    [analog_word7, AnswerKeys.e, da_color],
    [analog_word5, AnswerKeys.e, da_color],
    [digital_word2, AnswerKeys.i, da_color],
    [digital_word10, AnswerKeys.i, da_color],
    [digital_word3, AnswerKeys.i, da_color],
    [analog_word1, AnswerKeys.e, da_color],
    [digital_word1, AnswerKeys.i, da_color],
    [digital_word4, AnswerKeys.i, da_color],
    [analog_word3, AnswerKeys.e, da_color],
    [analog_word4, AnswerKeys.e, da_color],
    [digital_word9, AnswerKeys.i, da_color],
    [analog_word6, AnswerKeys.e, da_color],
    [digital_word5, AnswerKeys.i, da_color],
    [analog_word8, AnswerKeys.e, da_color],
    [digital_word6, AnswerKeys.i, da_color],
    [digital_word8, AnswerKeys.i, da_color]
];
var tasksStadium5 = [
    [good_word8, AnswerKeys.e, gb_color],
    [bad_word8, AnswerKeys.i, gb_color],
    [good_word3, AnswerKeys.e, gb_color],
    [analog_word5, AnswerKeys.e, da_color],
    [digital_word5, AnswerKeys.i, da_color],
    [digital_word3, AnswerKeys.i, da_color],
    [analog_word3, AnswerKeys.e, da_color],
    [analog_word10, AnswerKeys.e, da_color],
    [bad_word3, AnswerKeys.i, gb_color],
    [digital_word7, AnswerKeys.i, da_color],
    [digital_word6, AnswerKeys.i, da_color],
    [good_word7, AnswerKeys.e, gb_color],
    [digital_word10, AnswerKeys.i, da_color],
    [bad_word5, AnswerKeys.i, gb_color],
    [analog_word2, AnswerKeys.e, da_color],
    [analog_word6, AnswerKeys.e, da_color],
    [digital_word1, AnswerKeys.i, da_color],
    [good_word1, AnswerKeys.e, gb_color],
    [good_word4, AnswerKeys.e, gb_color],
    [good_word5, AnswerKeys.e, gb_color],
    [bad_word2, AnswerKeys.i, gb_color],
    [analog_word7, AnswerKeys.e, da_color],
    [analog_word1, AnswerKeys.e, da_color],
    [bad_word4, AnswerKeys.i, gb_color],
    [analog_word9, AnswerKeys.e, da_color],
    [digital_word4, AnswerKeys.i, da_color],
    [analog_word8, AnswerKeys.e, da_color],
    [digital_word8, AnswerKeys.i, da_color],
    [digital_word9, AnswerKeys.i, da_color],
    [good_word2, AnswerKeys.e, gb_color],
    [good_word6, AnswerKeys.e, gb_color],
    [bad_word1, AnswerKeys.i, gb_color],
    [bad_word6, AnswerKeys.i, gb_color],
    [analog_word4, AnswerKeys.e, da_color],
    [digital_word2, AnswerKeys.i, da_color],
    [bad_word7, AnswerKeys.i, gb_color]
];
function clearWrongAnswerFormat() {
    output.style.color = "white";
    output.style.fontSize = "16pt";
    output.style.textAlign = "left";
}
function wrongAnswer() {
    output.innerText = "Falsch";
    output.style.color = "red";
    output.style.fontSize = "24pt";
    output.style.textAlign = "center";
}
function selectPhase(phase) {
    switch (phase) {
        case 0:
            left_up.innerText = "";
            left_sep.innerText = "";
            left_down.innerText = "";
            right_up.innerText = "";
            right_sep.innerText = "";
            right_down.innerText = "";
            break;
        case 1:
            left_up.innerText = digital_cat;
            left_sep.innerText = "";
            left_down.innerText = "";
            right_up.innerText = analog_cat;
            right_sep.innerText = "";
            right_down.innerText = "";
            break;
        case 2:
            left_up.innerText = "";
            left_sep.innerText = "";
            left_down.innerText = good;
            right_up.innerText = "";
            right_sep.innerText = "";
            right_down.innerText = bad;
            break;
        case 3:
            left_up.innerText = digital_cat;
            left_sep.innerText = seperator;
            left_down.innerText = good;
            right_up.innerText = analog_cat;
            right_sep.innerText = seperator;
            right_down.innerText = bad;
            break;
        case 4:
            left_up.innerText = analog_cat;
            left_sep.innerText = "";
            left_down.innerText = "";
            right_up.innerText = digital_cat;
            right_sep.innerText = "";
            right_down.innerText = "";
            break;
        case 5:
            left_up.innerText = analog_cat;
            left_sep.innerText = seperator;
            left_down.innerText = good;
            right_up.innerText = digital_cat;
            right_sep.innerText = seperator;
            right_down.innerText = bad;
            break;
        default:
            left_up.innerText = "";
            left_sep.innerText = "";
            left_down.innerText = "";
            right_up.innerText = "";
            right_sep.innerText = "";
            right_down.innerText = "";
            break;
    }
}
function selectTestPadding(phase) {
    switch (phase) {
        case 1:
            middle.style.paddingTop = middle_paddingtop1;
            break;
        case 2:
            middle.style.paddingTop = middle_paddingtop1;
            break;
        case 3:
            middle.style.paddingTop = middle_paddingtop3;
            break;
        case 4:
            middle.style.paddingTop = middle_paddingtop1;
            break;
        case 5:
            middle.style.paddingTop = middle_paddingtop3;
            break;
        default:
            middle.style.paddingTop = middle_paddingtop1;
            break;
    }
}
var current_text_index = 0;
function createText(text, isTable, phase) {
    clearWrongAnswerFormat();
    middle.innerText = "";
    key_inst.innerText = keyinst_space_cont;
    if (isTable) {
        middle.style.paddingTop = middle_paddingtop_table;
    }
    else {
        middle.style.paddingTop = middle_paddingtop_text;
    }
    selectPhase(phase);
    output.innerText = text;
    document.addEventListener("keydown", function checkkey(event) {
        if (event.keyCode != space) {
            return;
        }
        document.removeEventListener("keydown", checkkey, false);
        console.log("current_text_index: " + current_text_index);
        switch (current_text_index) {
            case 0:
                current_text_index++;
                output.innerText = "";
                table_div.style.display = "inline";
                createText("", false, 0);
                break;
            case 1:
                current_text_index++;
                table_div.style.display = "none";
                createText(text1, false, 1);
                break;
            case 2:
                current_text_index++;
                phase1();
                break;
            case 3:
                current_text_index++;
                phase2();
                break;
            case 4:
                current_text_index++;
                phase3();
                break;
            case 5:
                current_text_index++;
                phase4();
                break;
            case 6:
                current_text_index++;
                phase5();
                break;
            case 7:
                current_text_index++;
                results();
                break;
            case 8:
                //current_text_index++;
                forwarding();
            default:
                console.log("fail");
                break;
        }
    });
}
var stadium1_word_index = 0;
var stadium2_word_index = 0;
var stadium3_word_index = 0;
var stadium4_word_index = 0;
var stadium5_word_index = 0;
function createStadium(task, phase) {
    var word = task[0];
    var correct_key = task[1];
    var color = task[2];
    selectPhase(phase);
    selectTestPadding(phase);
    key_inst.innerText = keyinst_ei;
    output.innerText = "";
    middle.innerText = word;
    middle.style.color = color;
    document.addEventListener("keydown", function checkkey(event) {
        if (!(event.keyCode in AnswerKeys)) {
            return;
        }
        if (event.keyCode != correct_key) {
            wrongAnswer();
            return;
        }
        document.removeEventListener("keydown", checkkey, false);
        //Stadium 1
        if (stadium1_word_index < tasksStadium1.length) {
            createStadium(tasksStadium1[stadium1_word_index++], 1);
            return;
        }
        if (stadium1_word_index == tasksStadium1.length) {
            stadium1_word_index++;
            console.log("Stadium 2!");
            createText(text2, false, 2);
            return;
        }
        //Stadium 2
        if (stadium2_word_index < tasksStadium2.length) {
            createStadium(tasksStadium2[stadium2_word_index++], 2);
            return;
        }
        if (stadium2_word_index == tasksStadium2.length) {
            stadium2_word_index++;
            console.log("Stadium 3!");
            createText(text3, false, 3);
            return;
        }
        //Stadium 3
        if (stadium3_word_index < tasksStadium3.length) {
            createStadium(tasksStadium3[stadium3_word_index++], 3);
            return;
        }
        if (stadium3_word_index == tasksStadium3.length) {
            stadium3_word_index++;
            console.log("Stadium 4!");
            createText(text4, false, 4);
            return;
        }
        //Stadium 4
        if (stadium4_word_index < tasksStadium4.length) {
            createStadium(tasksStadium4[stadium4_word_index++], 4);
            return;
        }
        if (stadium4_word_index == tasksStadium4.length) {
            stadium4_word_index++;
            console.log("Stadium 5!");
            createText(text5, false, 5);
            return;
        }
        //Stadium 5
        if (stadium5_word_index < tasksStadium5.length) {
            createStadium(tasksStadium5[stadium5_word_index++], 5);
            return;
        }
        if (stadium5_word_index == tasksStadium5.length) {
            stadium5_word_index++;
            console.log("Ende.");
            createText(text6, false, 0);
            return;
        }
    });
}
function start() {
    //something document.getElementById("vp_code_box").style.display = "inline";
}
var isX = false;
var isT = false;
function register() {
    output.innerText = "";
    //document.getElementById("vp_instructions").style.display = "block";
    var input_value = document.getElementById("vp_code").value;
    var first = input_value.charAt(0);
    var regex_x = RegExp(/^(x|X)[a-zA-Z]{3}\d{2}$/);
    var regex_t = RegExp(/^(t|T)[a-zA-Z]{3}\d{2}$/);
    console.log(input_value);
    console.log(first);

    
    if (first == "") {
        output.innerText = "Fehler: leeres Feld.";
        return;
    }
    if (input_value.length != 6) {
        output.innerText = "Fehler: Der VP-Code muss 6 Stellen lang sein.";
        return;
    }
    if (regex_x.test(input_value)) {
        isX = true;
        document.getElementById("vp_code_box").style.display = "none";
        document.getElementById("vp_instructions").style.display = "none";
        createText(text_intro, false, 0);
        return;
    }
    if (regex_t.test(input_value)) {
        isT = true;
        document.getElementById("vp_code_box").style.display = "none";
        document.getElementById("vp_instructions").style.display = "none";
        createText(text_intro, false, 0);
        return;
    }
    output.innerText = "Fehler: Code ungültig.";
}
function phase1() {
    var task = tasksStadium1[stadium1_word_index];
    createStadium(tasksStadium1[stadium1_word_index++], 1);
}
function phase2() {
    var task = tasksStadium2[stadium2_word_index];
    createStadium(tasksStadium2[stadium2_word_index++], 2);
}
function phase3() {
    var task = tasksStadium3[stadium3_word_index];
    createStadium(tasksStadium3[stadium3_word_index++], 3);
}
function phase4() {
    var task = tasksStadium4[stadium4_word_index];
    createStadium(tasksStadium4[stadium4_word_index++], 4);
}
function phase5() {
    var task = tasksStadium5[stadium5_word_index];
    createStadium(tasksStadium5[stadium5_word_index++], 5);
}
function results() {
    if (isX == true && isT == false) {
        createText(text_x_result, false, 0);
    }
    else if (isX == false && isT == true) {
        forwarding();
    }
    else {
        alert("leider ist etwas schiefgelaufen, bitte nehmen Sie noch einmal Teil.");
    }
}
function forwarding() {
    output.innerText = "";
    document.getElementById("endscreen_box").style.display = "block";
    document.getElementById("endscreen_code").innerText = "9191";
    key_inst.innerText = "";
}