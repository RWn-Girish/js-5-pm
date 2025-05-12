let display = document.querySelector("#display");
let buttons = document.querySelectorAll('button');

let currentNum = ""

function displayData() {
    display.value = currentNum || 0;
}

function appendData(data){
    currentNum = currentNum + data;
    displayData()
}

displayData()

function calculate() {
    let result = eval(currentNum)
    currentNum = result.toString()
    displayData();
}

function clearData(){
    currentNum = ""
    displayData();
}


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // console.log(button.textContent);
        let value = (button.textContent);
        if(value == "C"){
            clearData();
        }else if(value == "="){
            calculate()
        }else{
            appendData(value)
        }
    })
})


// Budget App
// random string generator
// count number of word
// count vowel charatcters
// currency convertor