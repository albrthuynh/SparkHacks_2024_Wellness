/*let name = prompt("Hello! What's your name?");*/
let numCoins = 0;
document.getElementById('numCoins').innerHTML = numCoins;
//document.write(numCoins);

$(window).on('load', function() {
    function displayRandomMessage() {
        let numVal = Math.floor(Math.random() * 10) + 1; // Adding 1 to ensure the range is 1-10
        const expr = numVal;
        switch (expr) {
            case 1:
                $("#show-me").html("Everyone has a happy ending. If you're not happy, it's not the end.");
                break;
            case 2:
                $("#show-me").html("Keep life moving forward, looking backward is only for time travelers. - Rachel O., Washington");
                break;
            case 3:
                $("#show-me").html("Don't leave your house");
                break;
            case 4:
                $("#show-me").html("Yes yes yes");
                break;
            case 5:
                $("#show-me").html("Bananapants");
                break;
            case 6:
                $("#show-me").html("You will live a long life, maybe");
                break;
            case 7:
                $("#show-me").html("Probably yes");
                break;
            case 8:
                $("#show-me").html("You will survive 2024");
                break;
            case 9:
                $("#show-me").html("Ice cream solves most problems");
                break;
            case 10:
                $("#show-me").html("You will be rewarded");
                break;
            default:
                $("#show-me").html("No");
        }
    }

    displayRandomMessage(); 
});