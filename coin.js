var numCoins = 0;

function increaseCoin() {
    numCoins++;
    updateCounter();
}

function updateCounter() {
    var countNum = document.getElementById('coin-counter');

    if(!countNum) {
        countNum = document.createElement('div');
        countNum.id = 'coin-counter';
        document.body.appendChild(countNum);
    }

    countNum.innerText = numCoins;

    counterElement.style.position = 'absolute';
    counterElement.style.top = '5%';
    counterElement.style.right = '45%';
    counterElement.style.fontSize = '20px';
    counterElement.style.color = 'white';
}

updateCounter();