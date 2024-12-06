const info = document.getElementById('click').onclick = getInfo;
const searchButton = document.querySelector('.search-button');


function getInfo() {
    console.log("STOP CLICKING ME");
}



searchButton.addEventListener('click', () => {
    // Get the values from the input fields
    const destination = document.querySelector('.search-bar input[placeholder="Where to?"]').value;
    const date = document.querySelector('.search-bar input[placeholder="MM/DD/YY"]').value;
    const guests = document.querySelector('.search-bar input[placeholder="2 Adults"]').value;

    // Do something with the values, like sending them to a server or displaying results on the page
    console.log(destination, date, guests);
});

// const numberInput = document.getElementById('numberInput');

// numberInput.addEventListener('input', (event) => {
//   // Allow only numbers, forward slash, and backspace
//   const regex = /^[0-9/]+$/;
//   if (!regex.test(event.target.value)) {
//     event.target.value = event.target.value.slice(0, -1); // Remove the last character
//   }

//   // Format the input as "03/12/2000"
//   const formattedValue = formatDate(event.target.value);
//   event.target.value = formattedValue;
// });

// function formatDate(input) {
//   // Split the input into parts
//   const parts = input.split('/');

//   // Format each part
//   const formattedParts = parts.map(part => part.padStart(2, '0'));

//   // Join the formatted parts
//   return formattedParts.join('/');
// }

// <input type="text" id="numberInput" maxlength="10"></input>