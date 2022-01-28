var arrayQuotes = [];

let inputBar = document.getElementById('inputBar');
let collectionList = document.getElementById('collectionList');
let submitBtn = document.getElementById('submitBtn');
let ClearBtn = document.getElementById('ClearBtn');

submitBtn.addEventListener('click', (e) => {
    let quote = inputBar.value;
    addQuote(quote);
    MapQuotes();


    e.preventDefault();
});



function MapQuotes() {
    collectionList.innerHTML = "";

    for (i = 0; i < arrayQuotes.length; i++) {
        collectionList.innerHTML += `<div class="quote-style">` + arrayQuotes[i] + ` <button index="` + i + `" class="del-btn btn-style">X</button></div>`;
    }
    inputBar.value = ''
}

collectionList.addEventListener('click' , (e) => {
    if(e.target.classList.contains('del-btn')){
        let index = e.target.getAttribute("index");
        DeleteQuote(+index);
        MapQuotes()
    }
})





ClearBtn.addEventListener('click', () => {
    collectionList.remove()
})




//UI FUCNTIONS










//Base Functions

function addQuote(quote) {
    arrayQuotes.push(quote);
}


function UpdateQuote(index, value) {
    arrayQuotes[index] = value;
}

function DeleteQuote(index) {
    let newArr = [];

    for (let i = 0; i < arrayQuotes.length; i++) {
        if (i == index) {
            // Kharab
            console.log("kashif");
        } else {
            // Sahi
            newArr.push(arrayQuotes[i]);
        }
    }
    arrayQuotes = newArr;
}

function FindIndex(quote) {
    let result;
    for (let i = 0; i < arrayQuotes.length; i++) {
        if (arrayQuotes[i] == quote) {
            result = i;
        }
    }
    return result;
}
