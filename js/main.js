//----- Sunkesni
//1 ir 2 uzduotis
console.log("----------- 1 ir 2 uzduotis -------------");

let textH1 = "Programavimas";

dokSuH1(textH1,1);

function dokSuH1(kazkas,tag) {
    textH1 = " <h" + tag + "> " + kazkas + " " + "</h" + tag + "> ";
    console.log("<h"+tag+">");
    document.getElementById("programming").innerHTML = textH1 + tag;
}








//3 uzduotis
console.log("----------- 3 uzduotis -------------");

function makeid(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz013456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength)) + " ";
    }
    return result;      
    }

console.log(makeid(13));
console.log(makeid(13));


//  if (result !==  ) {