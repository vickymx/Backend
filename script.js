const symbols = ["🎈","⛓️‍💥","🧿","🎀","🧸"];
function spin() {
    let reel1 = document.getElementById("reel1");
    let reel2 = document.getElementById("reel2");
    let reel3 = document.getElementById("reel3");
    let resultText = document.getElementById("result");

    let slot1 = symbols[Math.floor(Math.random() * symbols.length)];
    let slot2 = symbols[Math.floor(Math.random() * symbols.length)];
    let slot3 = symbols[Math.floor(Math.random() * symbols.length)];

    reel1.innerText = slot1;
    reel2.innerText = slot2
    reel3.innerText = slot3

    if (slot1 === slot2 && slot2 === slot3){
        resultText.innerText = "JACKPOT!";
        resultText.style.color = "green";
    } else {
        resultText.innerText = "Try again!";
        resultText.style.color = "red";
    }
}