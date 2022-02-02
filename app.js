var arrayQuotes = [];

let inputBar = document.getElementById('inputBar');
let collectionList = document.getElementById('collectionList');
let submitBtn = document.getElementById('submitBtn');
let ClearBtn = document.getElementById('ClearBtn');
let confirmBtn = document.getElementById('confirmBtn');
let updatedInputBar = document.getElementById('updatedInputBar');
var Index = 0;

submitBtn.addEventListener('click', (e) => {

    if (inputBar.value != '') {
        let quote = inputBar.value;
        addQuote(quote);
        MapQuotes();

    } else {
        alert("please fill the feild")
    }

    e.preventDefault();
});

confirmBtn.addEventListener('click', (e) => {
    if(updatedInputBar.value == ''){
        MapQuotes();
    }else{
        UpdateQuote(Index, updatedInputBar.value);
        MapQuotes();
    }
} )



function MapQuotes() {
    collectionList.innerHTML = "";

    for (i = 0; i < arrayQuotes.length; i++) {
        collectionList.innerHTML += `<div class="quote-style">` + `<p class = "set">${arrayQuotes[i]}</p>` + ` <button index="` + i + `" class="del-btn waves-effect waves-light btn">DELETE</button> <button id="updateButton"><a class="waves-effect waves-light btn modal-trigger" href="#modal1">UPDATE</a></button> </div>`;
    }
    inputBar.value = ''
}

collectionList.addEventListener('click', (e) => {
    if (e.target.classList.contains('del-btn')) {
        let index = e.target.getAttribute("index");
        DeleteQuote(+index);
        MapQuotes()
    }
})





ClearBtn.addEventListener('click', () => {
    arrayQuotes = [];
    MapQuotes();

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
            // console.log("kashif");
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
