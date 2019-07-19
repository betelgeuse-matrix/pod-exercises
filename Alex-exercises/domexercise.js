
function duplicateEncode(word){
    var string = "";
    var lowerCaseWord = word.toLowerCase();
    for (var i = 0; i < lowerCaseWord.length; i++) {
        if (lowerCaseWord.indexOf(lowerCaseWord[i]) === lowerCaseWord.lastIndexOf(lowerCaseWord[i])) {
            string += "(";
        } else {
            string += ")";
        }
    }
    return string;
}
console.log(duplicateEncode('hello'));



// get pictures to swap
//
$("#swap1").click(function () {
    var imgLeft = $("#1").attr("src");
    var imgCenter = $("#2").attr("src");


    $("#1").attr("src",imgCenter);
    $("#2").attr('src',imgLeft);
});


$("#swap3").click(function () {
    var imgCenter = $("#2").attr("src");
    var imgRight = $("#3").attr("src");

    $("#3").attr("src", imgCenter);
    $("#2").attr("src", imgRight);
});
//
//
$("#swap2").click(function(){

    for(var i=2; i>=0; i--) {
        var imgLeft = $("#1").attr("src");
        var imgCenter = $("#2").attr("src");
        var imgRight = $("#3").attr("src");

        var randomNumber = Math.floor(Math.random() * i);

        if (randomNumber === 0) {
            $("#2").attr("src", imgLeft);
            $("#1").attr("src", imgCenter)
        } else {
            $("#2").attr("src", imgRight);
            $("#3").attr("src", imgCenter)
        }
    }
});



// //     When someone types 1, 2, 3 in a row, show an alert that says "You get a 50% discount!".
//
var alertCode = '49,50,51';
var code=[];



$(document).keyup(function(element){
    code.push(element.keyCode);
    if (code.toString().indexOf(alertCode)>=0) {
        alert("you get a 50% discount");

    }
});

console.log(code)
