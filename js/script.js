const info = document.getElementById('click').onclick = getInfo;
const searchButton = document.querySelector('.search-button');


function getInfo() {
    console.log("STOP CLICKING ME");
}



searchButton.addEventListener('click', () => {
    // Get the values from the input fields
    const destination = document.querySelector('.search-bar input[placeholder="Where to?"]').value;
    const date = document.querySelector('.search-bar input[placeholder="MM/DD/YY"]').value;
    const guests = document.querySelector('.search-bar input[placeholder="2 adults"]').value;

    // Do something with the values, like sending them to a server or displaying results on the page
    console.log(destination, date, guests);
});