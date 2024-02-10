// Event listener: once page loads, then retrieve amount of coins
window.addEventListener("load", (event) => {
    document.getElementById("coincounter").innerHTML = localStorage.getItem("numCoins")
});